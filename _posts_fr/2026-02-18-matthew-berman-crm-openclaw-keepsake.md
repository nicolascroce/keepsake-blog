---
title: "J'ai analysé les 26 prompts de Matthew Berman pour son CRM personnel — voilà ce que ça implique"
description: "Matthew Berman a construit un CRM personnel impressionnant avec OpenClaw : 20 tables SQLite, 22 skills custom, des semaines de dev. Voilà ce que Keepsake fait out of the box."
date: 2026-02-18
author: Nicolas Croce
tags: [crm, productivite, organisation]
ref: matthew-berman-openclaw-crm
---

Il y a quelques jours, Matthew Berman a publié une vidéo qui a fait beaucoup de bruit dans la communauté AI : "21 use cases que j'utilise chaque jour avec OpenClaw." 4 000 likes, 480 retweets, et dans les commentaires des dizaines de personnes qui demandent : *comment je fais pareil ?*

J'ai regardé la vidéo. Lu les 26 prompts qu'il a publiés. Analysé son PRD (son document d'architecture complet, qu'il a rendu public). Et je veux vous dire exactement ce qu'il a construit — et ce que ça implique.

## Ce que Matthew Berman a réellement construit

Son système tourne en local sur un MacBook Air. Le cœur, c'est un CRM personnel qui ingère automatiquement Gmail et Google Calendar. Un LLM lit chaque email, décide si le contact mérite d'être sauvegardé, fait des recherches sur lui, puis l'enregistre dans une base de données SQLite avec des embeddings vectoriels Gemini 768 dimensions.

Résultat : 1 174 contacts. Une recherche en langage naturel ("à qui ai-je parlé chez NVIDIA ?" ou "qui n'a pas eu de nouvelles depuis longtemps ?"). Des scores de santé relationnelle. Des follow-up reminders qu'on peut créer, snoozer ou marquer comme faits. La détection automatique des doublons.

En parallèle, il a connecté Fathom (transcription de réunions) : quand une réunion se termine, le système attend 20 minutes, récupère la transcription, identifie les participants dans son CRM, extrait les action items, et envoie une queue d'approbation dans Telegram. Les tâches validées partent directement dans Todoist.

Il y a aussi une Knowledge Base : on envoie une URL dans Telegram, le système ingère l'article, la vidéo YouTube (avec le transcript), le thread Twitter complet et tous ses liens. Tout est vectorisé, interrogeable en langage naturel.

C'est impressionnant. Vraiment.

## L'architecture réelle

Ce que Berman n'a pas mis en avant dans la vidéo, c'est ce que son PRD révèle : **20 tables SQLite**, **22 skills custom** installés, **des dizaines de scripts Node.js** (sync.js, batch-scan.js, fathom-sync.js, health-check.js, restore-from-backups.js...), un test suite complet, des migrations de base de données, des backups chiffrés vers Google Drive toutes les heures.

Il l'a construit en semaines. Il le maintient en continu. Quand quelque chose casse — et ça casse — c'est lui qui debugge.

## Pourquoi je vous raconte tout ça

Je ne vous raconte pas ça pour décourager. Je vous raconte ça parce que ce que Berman a construit, c'est exactement la vision derrière Keepsake.

Mêmes intentions. Même problème à résoudre : les relations importantes qui s'effacent, les conversations qui disparaissent dans le bruit, la charge mentale de "ne pas oublier de reprendre contact avec Julien". La différence, c'est l'approche.

**Ce que [Keepsake](https://keepsake.place) fait out of the box :**

- Contacts avec historique des interactions et notes liées
- Entrées de journal associées à des personnes, des projets, des idées
- Tâches liées aux contacts
- Recherche instantanée, insensible aux accents
- Tout synchronisé, accessible depuis n'importe quel appareil

Pas de terminal. Pas de config JSON. Pas de migrations à gérer. Pas de backups à surveiller.

**Ce que Keepsake n'a pas encore :**

Soyons honnêtes. Il manque deux choses que Berman a et que je trouve vraiment utiles :

1. Le **relationship health score** — un indicateur visible qui dit "tu n'as pas eu de nouvelles de Marc depuis 47 jours". C'est simple à concevoir, puissant dans la pratique. C'est dans la roadmap.

2. L'**ingestion automatique depuis l'email** — le fait que les contacts se créent tout seuls à partir des emails reçus. Berman a mis des semaines à construire ça. C'est la prochaine grosse étape pour Keepsake.

## Ce que la vidéo de Berman confirme

Que le besoin est réel. Que des milliers de personnes veulent un CRM personnel qui leur ressemble, qui retient ce qui compte, qui les aide à entretenir leurs relations sans y penser.

La plupart de ces personnes ne vont pas ouvrir un terminal et écrire des prompts pendant trois semaines. Elles veulent que ça marche.

C'est pour elles que je construis Keepsake.

Si vous voulez essayer : **[app.keepsake.place](https://app.keepsake.place)** — 7 jours gratuits, sans carte bancaire.
