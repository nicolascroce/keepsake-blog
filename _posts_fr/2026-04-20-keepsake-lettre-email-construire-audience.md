---
title: "Keepsake — Votre Page collecte maintenant des abonnés email"
description: "La Page Keepsake propose désormais un formulaire d'abonnement et envoie une lettre récapitulative à la cadence que vous choisissez. Aucune configuration. Vos abonnés vous appartiennent."
date: 2026-04-20
author: Nicolas Croce
tags: [changelog, produit, page-keepsake, newsletter, lettre, email]
ref: keepsake-lettre-email-audience
---

Votre Page Keepsake — l'espace public où vous publiez vos notes à l'adresse `keepsake.place/@votre-pseudo` — peut maintenant faire plus qu'afficher vos publications. Elle collecte des abonnés email et leur envoie une lettre récapitulative à la cadence que vous choisissez. <mark>Aucune configuration : un formulaire est déjà sur votre page, le système est actif par défaut.</mark>

L'inspiration est claire : Hey World, l'outil de publication de 37signals. Une lettre tranquille, sans publicité, sans suivi. Ni un blog, ni un réseau social — juste un coin tranquille du web pour partager ce qui mérite de l'être, et un canal direct vers les lecteurs qui veulent en savoir plus.

## Comment vos lecteurs s'abonnent

Sous votre bio, juste avant les liens RSS / Contact, un petit bloc d'abonnement apparaît : une ligne en italique « *Abonnez-vous pour recevoir mes publications :* » avec un champ email et un bouton **S'ABONNER**.

Le flux est en double opt-in, par principe :

1. Le visiteur saisit son email et clique sur S'abonner.
2. Il reçoit immédiatement un email de confirmation à l'adresse indiquée.
3. Il clique sur le bouton de confirmation. Son abonnement est actif.
4. Il reçoit un mini-digest avec vos trois dernières publications, pour démarrer.

Aucun spam, aucune liste louche : seuls les emails confirmés rejoignent votre liste d'abonnés.

## Trois cadences, vous choisissez

Depuis **Réglages → Lettre par email**, vous choisissez à quelle fréquence une lettre part :

- **Hebdomadaire** (par défaut) — une lettre tous les lundis matin, récapitulant vos publications de la semaine. Le rythme par défaut, qui convient à la plupart des écritures régulières.
- **Quotidienne** — un email par jour, quand vous avez publié. Idéal pour un journal de voyage, un événement live, une période d'écriture intense.
- **Désactivée** — aucun email envoyé, et le formulaire d'abonnement disparaît de votre page.

<mark>Pas de publication sur la période = aucun email envoyé.</mark> Vos abonnés ne reçoivent jamais de lettre vide. Et vous pouvez changer de cadence quand vous voulez : vos abonnés ne voient pas vos réglages, ils voient simplement les publications arriver.

## À quoi ressemble la lettre

L'email reprend l'esprit de votre page : mêmes couleurs de thème, même typographie serif, même calme. Ce n'est pas un email marketing, c'est une lettre.

Un post avec une seule photo s'affiche en pleine largeur. De deux à quatre photos sont rangées dans une grille à 2 colonnes. Au-delà de quatre, les quatre premières s'affichent et un lien « +N autres photos → » renvoie au post complet. Chaque vignette est cliquable.

Les posts longs sont tronqués dans la lettre, avec un lien « Lire la suite → » vers la note complète sur votre Page Keepsake. La lettre récapitulative limite à vingt publications par envoi — au-delà, un lien « Voir tous les posts → » pointe vers votre page.

## Vos abonnés vous appartiennent

Trois engagements, intégrés au système dès le premier envoi :

- **Les réponses arrivent dans votre boîte mail.** Quand un abonné clique sur Répondre, sa réponse arrive sur l'**email de contact** que vous avez configuré pour votre page. Vos lecteurs peuvent vous écrire ; vos conversations restent réelles.
- **Un bouton « Se désabonner » natif** est affiché par Gmail, Yahoo et Apple Mail directement dans l'en-tête de la boîte mail (conforme RFC 8058). Désinscription en un clic, sans piège.
- **Export CSV à tout moment.** Un bouton dans les Paramètres télécharge votre liste complète : email, statut, dates d'inscription et de confirmation. À ouvrir dans Excel, à importer dans n'importe quel autre outil. Votre liste est à vous.

## Pendant votre essai Keepsake

Les inscriptions sont acceptées dès le premier jour. Votre audience peut commencer à grandir immédiatement. Les lettres elles-mêmes sont en pause pendant la période d'essai ; la prochaine lettre prévue part dès que vous activez votre abonnement Keepsake.

## Pour aller plus loin

Pour la majorité des créateurs, la lettre Keepsake suffit largement : formulaire, double opt-in, lettre régulière, réponses, export. Quand on a besoin de fonctionnalités avancées — segments, A/B testing, automations, newsletter payante — on couple Keepsake avec une plateforme dédiée comme [Kit (anciennement ConvertKit)](https://partners.kit.com/lqf18mz2ghj0) en utilisant le flux RSS public de votre page (`keepsake.place/@votre-pseudo/rss.xml`).

Le [guide complet « Construisez votre audience »](https://keepsake.place/fr/help/audience) détaille les deux approches.

## À vous de jouer

La fonctionnalité est active dès maintenant pour toutes les Pages Keepsake. Le formulaire apparaît sous la bio des pages dont la cadence est sur hebdomadaire ou quotidienne. Pour le voir en action, [consultez la Page Keepsake de Nicolas](https://keepsake.place/@nicolas).

Pour configurer votre lettre, c'est dans **Réglages → Lettre par email**. Trois cadences, un compteur d'abonnés, l'export CSV, et c'est tout.
