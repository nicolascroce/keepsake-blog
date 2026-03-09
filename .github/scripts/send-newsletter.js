#!/usr/bin/env node
/**
 * send-newsletter.js
 * Détecte les nouveaux posts ajoutés dans ce push et envoie
 * un broadcast Resend au segment correspondant (lang-fr ou lang-en).
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Config
const AUDIENCE_ID = 'bcac5bcc-8969-4804-96cd-e845c8fb763f';
const SEGMENTS = {
  fr: '79f61bcf-dd7c-4830-baae-a9ebd119daf0',
  en: '8182a1b9-06f9-4095-aeca-7ef100b5cd3b',
};
const BLOG_URL = 'https://blog.keepsake.place';
const FROM_FR = 'Keepsake Blog <blog@keepsake.place>';
const FROM_EN = 'Keepsake Blog <blog@keepsake.place>';

// Récupérer les fichiers ajoutés dans ce push (ou via workflow_dispatch)
function getNewPostFiles() {
  // Mode test manuel via workflow_dispatch
  const testFile = process.env.TEST_FILE;
  if (testFile) {
    console.log(`Mode test manuel : ${testFile}`);
    return [testFile];
  }

  const diff = execSync('git diff --name-status HEAD~1 HEAD', { encoding: 'utf8' });
  const lines = diff.trim().split('\n');
  const newFiles = [];

  for (const line of lines) {
    const [status, file] = line.split('\t');
    if (status === 'A' && file && (file.startsWith('_posts_fr/') || file.startsWith('_posts_en/'))) {
      newFiles.push(file);
    }
  }

  return newFiles;
}

// Extraire les infos du front matter + construire l'URL
function parsePost(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(content);

  const lang = filePath.startsWith('_posts_fr/') ? 'fr' : 'en';
  const filename = path.basename(filePath, '.md'); // ex: 2026-03-06-mon-post
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);

  if (!match) {
    console.error(`Format de nom de fichier inattendu : ${filename}`);
    return null;
  }

  const [, year, month, , slug] = match;
  const url = `${BLOG_URL}/${lang}/${year}/${month}/${slug}/`;

  return {
    lang,
    title: data.title || slug,
    description: data.description || '',
    url,
    tags: data.tags || [],
  };
}

// Générer le HTML de l'email
function buildEmailHtml(post) {
  if (post.lang === 'fr') {
    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a; background: #fff;">
  <p style="font-size: 13px; color: #888; margin-bottom: 32px; letter-spacing: 0.05em; text-transform: uppercase;">Keepsake Blog</p>

  <h1 style="font-size: 24px; font-weight: bold; line-height: 1.3; margin: 0 0 16px;">${post.title}</h1>

  <p style="font-size: 16px; color: #444; line-height: 1.6; margin: 0 0 32px;">${post.description}</p>

  <a href="${post.url}" style="display: inline-block; background: #1a1a1a; color: #fff; text-decoration: none; padding: 12px 24px; font-size: 15px; border-radius: 4px;">Lire l'article →</a>

  <hr style="border: none; border-top: 1px solid #eee; margin: 48px 0 24px;">

  <p style="font-size: 12px; color: #999; line-height: 1.5;">
    Vous recevez cet email parce que vous êtes abonné au blog Keepsake.<br>
    <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #999;">Se désabonner</a>
  </p>
</body>
</html>`;
  } else {
    return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a; background: #fff;">
  <p style="font-size: 13px; color: #888; margin-bottom: 32px; letter-spacing: 0.05em; text-transform: uppercase;">Keepsake Blog</p>

  <h1 style="font-size: 24px; font-weight: bold; line-height: 1.3; margin: 0 0 16px;">${post.title}</h1>

  <p style="font-size: 16px; color: #444; line-height: 1.6; margin: 0 0 32px;">${post.description}</p>

  <a href="${post.url}" style="display: inline-block; background: #1a1a1a; color: #fff; text-decoration: none; padding: 12px 24px; font-size: 15px; border-radius: 4px;">Read the article →</a>

  <hr style="border: none; border-top: 1px solid #eee; margin: 48px 0 24px;">

  <p style="font-size: 12px; color: #999; line-height: 1.5;">
    You're receiving this because you subscribed to the Keepsake blog.<br>
    <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color: #999;">Unsubscribe</a>
  </p>
</body>
</html>`;
  }
}

// Créer et envoyer un broadcast Resend
async function sendBroadcast(post) {
  const from = post.lang === 'fr' ? FROM_FR : FROM_EN;
  const segmentId = SEGMENTS[post.lang];

  console.log(`\n📨 Envoi broadcast [${post.lang.toUpperCase()}] : "${post.title}"`);
  console.log(`   URL : ${post.url}`);
  console.log(`   Segment : ${segmentId}`);

  // 1. Créer le broadcast ciblé sur le segment (sans audience_id)
  const createRes = await fetch('https://api.resend.com/broadcasts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      segment_id: segmentId,
      from,
      subject: post.title,
      html: buildEmailHtml(post),
      name: `Blog ${post.lang.toUpperCase()} — ${post.title}`,
    }),
  });

  const broadcast = await createRes.json();

  if (!broadcast.id) {
    console.error('❌ Erreur création broadcast :', broadcast);
    process.exit(1);
  }

  console.log(`   Broadcast créé : ${broadcast.id}`);

  // 2. Envoyer
  const sendRes = await fetch(`https://api.resend.com/broadcasts/${broadcast.id}/send`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });

  const sendData = await sendRes.json();

  if (sendRes.ok) {
    console.log(`   ✅ Broadcast envoyé !`);
  } else {
    console.error('❌ Erreur envoi :', sendData);
    process.exit(1);
  }
}

// Main
async function main() {
  const newFiles = getNewPostFiles();

  if (newFiles.length === 0) {
    console.log('Aucun nouveau post détecté. Rien à envoyer.');
    process.exit(0);
  }

  console.log(`${newFiles.length} nouveau(x) post(s) détecté(s) :`);
  newFiles.forEach(f => console.log(`  - ${f}`));

  for (let i = 0; i < newFiles.length; i++) {
    const post = parsePost(newFiles[i]);
    if (!post) continue;
    if (i > 0) {
      // Resend rate limit: 2 req/sec — wait 1.5s between broadcasts
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
    await sendBroadcast(post);
  }

  console.log('\n✅ Terminé.');
}

main().catch(err => {
  console.error('Erreur fatale :', err);
  process.exit(1);
});
