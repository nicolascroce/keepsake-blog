# CLAUDE.md - Keepsake Blog Context

> **Ce fichier est lu automatiquement par Claude Code au démarrage de chaque session.**
> Il fournit le contexte global du projet pour une assistance optimale.

---

## Project Overview

**Keepsake Blog** est le blog bilingue (FR/EN) de l'application Keepsake (CRM personnel).

- **URL Production** : `https://blog.keepsake.place`
- **URL App** : `https://app.keepsake.place`
- **URL Site marketing** : `https://keepsake.place`
- **Repo** : `keepsake-blog` (GitHub Pages)
- **Chemin local** : `/Users/nicolascroce/ProjetsDev/keepsake-blog`

---

## Objectif du blog

**Aider les gens à mieux gérer leur vie, leurs relations et leurs idées — même s'ils n'utilisent pas Keepsake.**

Le blog sert deux fonctions :

### 1. Articles SEO / Contenu de valeur
Articles sur l'organisation personnelle, la charge mentale, les relations, la productivité. Chaque article apporte une **vraie valeur** indépendante de Keepsake — le lecteur apprend quelque chose d'utile même s'il n'utilise jamais l'app. Keepsake est mentionné naturellement comme l'outil qui met en pratique ces concepts.

### 2. Annonces produit (Changelog)
Articles courts annonçant les nouvelles fonctionnalités de Keepsake. Rédigés dans le ton de Nicolas : direct, personnel, pas corporate. Source : les changelogs Obsidian.

### Philosophie éditoriale
- **Valeur d'abord.** Si l'article ne tient pas sans Keepsake, il n'est pas assez bon.
- **Ton de Nicolas.** Direct, profond, personnel. Comme s'il écrivait à un ami intelligent.
- **Aider, pas vendre.** On construit de l'autorité sur le sujet → Keepsake devient la conséquence logique.
- **Chaque email = 1 idée + 1 action.** Court, lisible sur mobile.

---

## Architecture technique

### Stack

| Technologie | Usage |
|------------|-------|
| Jekyll 4.x | Générateur de site statique |
| GitHub Pages | Hébergement (gratuit, auto-deploy sur push) |
| Ruby (Homebrew) | Runtime Jekyll |
| Markdown | Format des articles |

### Structure du projet

```
keepsake-blog/
├── _config.yml              # Configuration Jekyll
├── _layouts/
│   ├── default.html         # Layout principal (HTML + CSS inline)
│   └── post.html            # Layout article
├── _posts_fr/               # Articles en français
│   └── YYYY-MM-DD-slug.md
├── _posts_en/               # Articles en anglais
│   └── YYYY-MM-DD-slug.md
├── fr/
│   └── index.html           # Page listing FR
├── en/
│   └── index.html           # Page listing EN
├── feed/
│   ├── fr.xml               # Flux RSS français
│   └── en.xml               # Flux RSS anglais
├── index.html               # Accueil (redirige vers FR/EN)
├── CNAME                    # Custom domain (blog.keepsake.place)
├── Gemfile                  # Dépendances Ruby
├── .gitignore
└── CLAUDE.md                # Ce fichier
```

### Bilinguisme

Le blog utilise deux **collections Jekyll** séparées :
- `_posts_fr/` → Articles français, URLs `/fr/YYYY/MM/slug/`
- `_posts_en/` → Articles anglais, URLs `/en/YYYY/MM/slug/`

Chaque collection génère son propre flux RSS :
- `/feed/fr.xml` → RSS français → ConvertKit (abonnés FR)
- `/feed/en.xml` → RSS anglais → ConvertKit (abonnés EN)

### Flux RSS → ConvertKit

```
Article publié (git push)
  → GitHub Pages rebuild
  → RSS mis à jour (/feed/fr.xml ou /feed/en.xml)
  → ConvertKit détecte le nouvel article
  → Email envoyé aux abonnés dans la bonne langue
```

ConvertKit gère TOUTE la partie email : séquences, newsletters, segmentation langue. Le blog ne fait que générer les RSS.

---

## Écrire un article

### Format d'un article

Chaque article est un fichier Markdown avec un front matter YAML :

```markdown
---
title: "Titre de l'article"
description: "Description courte pour le SEO (< 160 caractères)"
date: YYYY-MM-DD
author: Nicolas Croce
tags: [changelog, produit]
ref: slug-commun-fr-en
---

Contenu de l'article en Markdown...
```

### Champ `ref` (OBLIGATOIRE pour le SEO bilingue)

Le champ `ref` dans le front matter lie les versions FR et EN d'un même article. **Il doit être identique** dans les deux versions. C'est ce qui permet aux balises `hreflang` de pointer vers la traduction exacte plutôt que vers la page d'accueil.

Exemple :
- `_posts_fr/2026-02-17-entreprises-et-editeur-texte.md` → `ref: companies-text-editor`
- `_posts_en/2026-02-17-companies-and-text-editor.md` → `ref: companies-text-editor`

**Si `ref` est absent**, le hreflang pointera vers la page d'accueil de l'autre langue (fallback). Ça fonctionne mais c'est mauvais pour le SEO.

**Convention de nommage du `ref`** : utiliser le slug anglais de l'article, sans date. Exemples : `companies-text-editor`, `mental-load-guide`, `weekly-review-habit`.

### Nommage des fichiers

```
YYYY-MM-DD-slug-en-minuscules.md
```

Exemples :
- `2026-02-17-entreprises-et-editeur-texte.md`
- `2026-02-17-companies-and-text-editor.md`

### Tags recommandés

| Tag | Usage |
|-----|-------|
| `changelog` | Annonces de nouvelles fonctionnalités |
| `produit` / `product` | Actualités produit |
| `seo` | Articles de contenu SEO |
| `guide` | Guides pratiques |
| `organisation` / `organization` | Articles sur l'organisation personnelle |
| `relations` / `relationships` | Articles sur la gestion des relations |
| `productivite` / `productivity` | Articles sur la productivité |

### Publier un article

```bash
# 1. Créer le fichier dans _posts_fr/ et/ou _posts_en/
# 2. Commit et push
cd /Users/nicolascroce/ProjetsDev/keepsake-blog
git add -A
git commit -m "post: titre de l'article"
git push
# 3. GitHub Pages rebuild automatiquement (1-2 min)
```

---

## Développement local

### Prérequis

- Ruby (via Homebrew) : `brew install ruby`
- PATH : `export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/3.4.0/bin:$PATH"`
- Jekyll : `gem install jekyll bundler`

### Commandes

```bash
cd /Users/nicolascroce/ProjetsDev/keepsake-blog

# Installer les dépendances
bundle install

# Lancer le serveur local
bundle exec jekyll serve --port 4040

# Le site est accessible sur http://localhost:4040
# Hot reload : les modifications sont détectées automatiquement
```

### Build sans serveur

```bash
bundle exec jekyll build
# Le site est généré dans _site/
```

---

## Obsidian

Le dossier `keepsake-blog/` peut être ouvert comme vault Obsidian (ou ajouté à un vault existant). Les articles dans `_posts_fr/` et `_posts_en/` sont des fichiers Markdown standards lisibles et éditables dans Obsidian.

Le dossier `.obsidian/` est exclu du repo git (`.gitignore`).

---

## Liens avec les autres repos Keepsake

| Projet | Chemin local | URL | Stack |
|--------|-------------|-----|-------|
| **Blog** (ce repo) | `/Users/nicolascroce/ProjetsDev/keepsake-blog` | `blog.keepsake.place` | Jekyll + GitHub Pages |
| **App** | `/Users/nicolascroce/ProjetsDev/keepsake-app` | `app.keepsake.place` | Next.js + Supabase + Stripe |
| **Site marketing** | `/Users/nicolascroce/ProjetsDev/keepsake-website` | `keepsake.place` | Next.js 15 + TypeScript + Tailwind |

### Sources de contenu

| Source | Chemin | Usage |
|--------|--------|-------|
| Changelog technique | `/Users/nicolascroce/Obsidian Vaults/Keepsake/CHANGELOG-TECHNIQUE.md` | Référence pour articles changelog |
| Changelog utilisateurs | `/Users/nicolascroce/Obsidian Vaults/Keepsake/CHANGELOG-UTILISATEURS.md` | Texte des annonces produit |
| Stratégie Growth | `/Users/nicolascroce/Obsidian Vaults/Keepsake/Growth/` | Workflows SEO, content, communities |
| Articles Ghost (blog perso) | Ghost Admin API | Articles existants à adapter pour le blog Keepsake |
| Séquences email | `/Users/nicolascroce/Obsidian Vaults/Keepsake/Séquences Mail/` | Référence de ton et contenu |

---

## SEO

### Règles

- **Titles** : Uniques, < 60 caractères, avec mot-clé principal
- **Descriptions** : < 160 caractères, incitatives
- **Sitemap** : Généré automatiquement par `jekyll-sitemap`
- **Canonical URLs** : Définis via `url` + `baseurl` dans `_config.yml`
- **Backlinks** : Chaque article SEO doit contenir 1-2 liens naturels vers `keepsake.place` ou `app.keepsake.place`

### Plugins Jekyll SEO

- `jekyll-feed` : Génération RSS
- `jekyll-sitemap` : Génération sitemap.xml
- `jekyll-seo-tag` : Meta tags SEO automatiques (Open Graph, Twitter Cards, JSON-LD)

---

## Git Workflow

### Branche

- **main** : Production (déploiement automatique sur GitHub Pages)

### Règles

1. **Commits locaux** : OK à tout moment
2. **Push sur `main`** : Uniquement sur demande explicite — déclenche le déploiement
3. **Conventional commits** : `post:`, `fix:`, `chore:`, `feat:`

### Commandes courantes

```bash
git status
git add -A && git commit -m "post: titre"
git push origin main    # Déploie automatiquement
```

---

## Stratégie de liens croisés

### Principes
- Chaque article SEO → 1-2 liens vers keepsake.place ou app.keepsake.place
- La documentation (Notion/site) peut linker vers des articles blog qui détaillent un use case
- Le site marketing peut linker vers des articles blog pour du contenu approfondi

### Quand on publie un article
1. Identifier les pages doc/marketing qui pourraient bénéficier d'un lien vers cet article
2. Ajouter des liens retour dans l'article vers la doc pertinente
3. Mettre à jour la doc si un article de blog donne des exemples concrets d'une fonctionnalité

### Types de liens

| Depuis | Vers | Quand |
|--------|------|-------|
| Article blog | keepsake.place | Toujours (CTA naturel) |
| Article blog | Documentation | Quand on mentionne une fonctionnalité |
| Documentation | Article blog | Quand un article donne des exemples pratiques |
| Site marketing | Article blog | Pour du contenu approfondi sur un sujet |

---

## Design

Le blog utilise un **design custom Keepsake Light** (pas de thème Jekyll externe) :
- CSS inline dans `_layouts/default.html`
- Typographie : Inter (Google Fonts) + system stack
- Max-width 720px, centré
- Palette Keepsake Light : `--bg: #f6f3ee`, `--bg-surface: #ffffff`, `--text: #1c1917`, `--accent: #2563eb`, `--border: #ddd8d2`
- Header blanc avec ombre subtile, logo SVG Keepsake
- Hero CTA pleine largeur avec formulaire d'inscription
- Responsive (mobile-first)

Pour modifier le design, éditer directement le `<style>` dans `_layouts/default.html`.

### Améliorations prévues
- [ ] Images / illustrations pour les articles
- [ ] Partage social (Open Graph images custom par article)
- [ ] Pagination si beaucoup d'articles

---

## Problèmes courants

| Problème | Solution |
|----------|----------|
| `bundle exec jekyll serve` ne marche pas | Vérifier le PATH Ruby : `export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/3.4.0/bin:$PATH"` |
| GitHub Pages ne rebuild pas | Vérifier le fichier `CNAME` et les settings GitHub Pages du repo |
| Warnings Sass (deprecation) | Ignorables — viennent de dépendances, pas de notre code |
| Article n'apparaît pas | Vérifier : nom de fichier `YYYY-MM-DD-slug.md`, front matter valide, fichier dans le bon dossier (`_posts_fr/` ou `_posts_en/`) |
| RSS ne se met pas à jour | Vérifier que le fichier est dans la bonne collection et que le front matter contient `date` |

---

*Dernière mise à jour : Février 2026*
