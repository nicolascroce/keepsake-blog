# Keepsake Blog

Blog bilingue (FR/EN) pour [keepsake.place](https://keepsake.place).

- Articles FR : `_posts_fr/`
- Articles EN : `_posts_en/`
- RSS FR : `/feed/fr.xml`
- RSS EN : `/feed/en.xml`

## Publier un article

1. Créer un fichier dans `_posts_fr/` ou `_posts_en/` (format : `YYYY-MM-DD-slug.md`)
2. Ajouter le front matter (title, description, date, author, tags)
3. `git push` → GitHub Pages build automatiquement

## Dev local

```bash
bundle exec jekyll serve
```
