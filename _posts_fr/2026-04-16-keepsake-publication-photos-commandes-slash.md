---
title: "Keepsake — Publication publique, photos et commandes slash"
description: "La mise à jour du 16 avril 2026 introduit la publication de notes sur une page publique, les photos dans les notes, les commandes slash et l'intention du jour."
date: 2026-04-16
author: Nicolas Croce
tags: [changelog, produit, notes, publication, photos]
ref: keepsake-publish-photos-slash-commands
---

Cette mise à jour apporte trois nouvelles capacités à Keepsake et repositionne la manière dont vous démarrez votre journée. Vous pouvez désormais publier une note sur une page publique à votre nom, capturer des photos directement dans vos notes, et formater votre contenu au clavier avec des commandes slash. L'ensemble reste guidé par le même principe : ce qui est privé le reste par défaut, et ce qui devient public est un choix explicite.

## Votre Page Keepsake

Chaque compte dispose désormais d'une page publique à l'adresse `keepsake.place/@votre-pseudo`. C'est votre Page Keepsake — un espace de publication conçu pour partager vos notes avec le monde, sans quitter Keepsake.

**Comment ça fonctionne**

Toutes les notes affichent désormais une icône en forme de globe. Un clic sur cette icône ouvre une fenêtre de confirmation, puis publie la note sur votre page publique. Un second clic dépublie la note, qui redevient privée.

Chaque note publiée possède sa propre URL permanente : `keepsake.place/@votre-pseudo/titre-de-la-note`. Cette URL est directement partageable. Vous pouvez la copier pour l'envoyer par message, la publier sur les réseaux sociaux, ou l'inclure dans une signature d'email.

**Personnalisation de la page**

Dans les Réglages, une nouvelle section « Page Keepsake » permet de configurer votre page publique :

- **Pseudo (username)** : trois à trente caractères, lettres minuscules, chiffres, tirets et underscores. Ce pseudo devient l'URL de votre page. La disponibilité est vérifiée en temps réel pendant la saisie.
- **Nom affiché** : le nom public, distinct de votre nom réel si vous le souhaitez.
- **Bio** : un court texte de présentation.
- **Liens** : une liste de liens externes (site, Twitter, Instagram, LinkedIn…), affichés sur votre page publique.

**Privé par défaut, public à la demande**

La publication est toujours un acte volontaire. Aucune note n'est publiée sans confirmation explicite. Vos QuickNotes, entrées et tâches restent intégralement privées. Seules les notes que vous publiez activement apparaissent sur votre Page Keepsake.

Pour les détails complets, consultez l'[article du Centre d'aide sur la Page Keepsake](https://keepsake.place/fr/help/public-profile).

## Photos dans les notes

Vos notes acceptent désormais les photos. Trois moyens de les ajouter :

**Bouton caméra dans la barre QuickNote**

La barre de capture située en haut de l'Inbox inclut un nouveau bouton caméra. Sur mobile, il ouvre directement la caméra de votre téléphone ; sur ordinateur, le sélecteur de fichiers. L'image est automatiquement compressée (1200 px, qualité 80 %) et une QuickNote est créée en un seul geste.

**Glisser-déposer et coller**

Tous les éditeurs de notes acceptent désormais le glisser-déposer d'images et le collage depuis le presse-papiers (Cmd+V / Ctrl+V). Aucun bouton spécifique, aucune étape supplémentaire : l'image est uploadée et insérée à la position du curseur.

**Format photo-post**

Quand une note commence par une image, elle s'affiche automatiquement dans un format « photo-post » sur les différentes vues : une image en tête, une légende en dessous. Le format s'adapte aux cards d'Inbox, aux fiches archivées et aux pages de contacts ou de tags.

Lorsqu'une note photo est supprimée, l'image associée est automatiquement retirée du stockage. Aucun fichier orphelin.

Pour les détails, consultez l'[article du Centre d'aide sur les photos dans les notes](https://keepsake.place/fr/help/note-photos).

## Commandes slash (/)

Taper `/` dans n'importe quel éditeur de note ouvre désormais une palette de commandes, similaire au système d'autocomplétion déjà utilisé pour les tags et les contacts.

**Mise en forme**

- `/h1` et `/h2` — titres
- `/liste` — liste à puces
- `/tâches` — liste de cases à cocher
- `/citation` — bloc de citation
- `/code` — bloc de code
- `/séparateur` — ligne horizontale

**Insertion**

- `/image` — ouvre le sélecteur de fichiers

**Transformation de la note**

- `/split` — coupe la note en deux au curseur : le contenu au-dessus reste dans la note d'origine, le contenu en dessous devient une nouvelle note.
- `/duplicate` — crée une copie de la note courante.

Les commandes slash fonctionnent partout : barre QuickNote, éditeur d'entrée, page dédiée d'une note. Elles se combinent avec la syntaxe Markdown et les mentions de tags et contacts déjà existantes.

Pour les détails, consultez l'[article du Centre d'aide sur les commandes slash](https://keepsake.place/fr/help/slash-commands).

## Intention du jour

La « note du jour » est remplacée par une fonctionnalité orientée prompt : l'**Intention du jour**. Une ligne, à compléter chaque matin, pour définir un mantra, une priorité ou une affirmation qui guidera la journée.

L'intention de la veille apparaît en gris italique au-dessus du formulaire vide, pour inspirer celle du jour. C'est un fil discret entre vos journées.

L'intention est visible partout où vous en avez besoin :

- Dans la vue **Aujourd'hui**, en haut de la page
- Dans le **Journal**, sous l'en-tête de chaque jour
- Dans la **barre latérale droite**, sous le numéro de semaine, avec un lien « Définir une intention » si elle n'est pas encore renseignée

Cette évolution est conceptuelle : le champ sous-jacent reste le même (une note libre par jour), mais le cadre encourage une pratique courte et réflexive plutôt qu'un journal de bord long.

Pour les détails, consultez l'[article du Centre d'aide sur la routine quotidienne](https://keepsake.place/fr/help/daily-workflow).

## Point d'accès MCP distant

Pour les utilisateurs d'assistants IA, un nouveau point d'accès permet de connecter Claude à Keepsake sans installer de serveur local : `https://app.keepsake.place/api/mcp`. Il fonctionne directement avec Claude iOS, Claude web et les Connecteurs Claude Desktop.

Les 58 outils Keepsake (gestion des contacts, tâches, notes, entrées, tags, recherche) sont disponibles immédiatement avec une clé API. Pour les utilisateurs existants de `npx keepsake-mcp`, l'installation locale reste pleinement supportée.

Pour les détails, consultez la [page d'intégration IA](https://keepsake.place/fr/ai).

## En résumé

Cette mise à jour étend Keepsake sur trois axes : la publication, la capture visuelle et l'efficacité d'écriture. Chaque fonctionnalité suit la même logique : enrichir l'outil sans alourdir son usage quotidien. Vous gardez le contrôle sur ce qui reste privé et sur ce qui devient public, et l'expérience de capture — ce qui fait le cœur de Keepsake — reste au premier plan.

L'ensemble est disponible dès aujourd'hui pour tous les comptes. Les détails complets, fonctionnalité par fonctionnalité, sont documentés dans le [Centre d'aide](https://keepsake.place/fr/help) et dans la [page Nouveautés](https://keepsake.place/fr/changelog).
