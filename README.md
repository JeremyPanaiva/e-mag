# e-mag — Pôles Actu n°90

Maquette web du magazine **Pôles Actu**, le journal du Pôle d'Activités d'Aix-en-Provence (PAAP). Le projet reprend le contenu du numéro 90 (juin 2026) et le présente sous forme de site éditorial : couverture, sommaire, articles, rubriques et publicités.

Il s'agit d'une **maquette** destinée à montrer un rendu visuel à un client : le contenu est extrait du PDF officiel, mais il n'y a ni CMS, ni authentification, ni base de données.

**Démo en ligne** : https://jeremypanaiva.github.io/e-mag/

## Stack

- Next.js 16 (App Router, Turbopack) et React 19, en TypeScript strict
- Tailwind CSS v4 (configuration dans `src/app/globals.css`)
- Export statique (`output: "export"`) pour GitHub Pages
- Windows 11, Node 24, npm

## Commandes

```bash
npm install      # dépendances
npm run dev      # serveur local sur http://localhost:3000
npm run build    # build statique dans out/
npm run lint     # ESLint
```

## Structure

```
src/
  app/          routes (une page = un dossier avec page.tsx)
  components/   composants réutilisables (un composant par fichier)
  content/      contenu typé : articles, rubriques, partenaires, numéro
  lib/          utilitaires (résumés, rubriques, chemins d'assets)
public/         images, logos et assets (chemins /n90/..., /partners/...)
source/         matière première extraite du PDF (textes, images, logos, pubs)
.github/workflows/deploy.yml   déploiement automatique
```

Le contenu éditorial vit dans `src/content/articles/*.ts` : un fichier par article, typé par `src/content/types.ts`.

## Source du contenu

Tout le contenu vient du PDF officiel de Pôles Actu n°90 (source : entreprises-aix.com). Le dossier `source/` contient :

- `textes/` : texte intégral des articles retenus, sommaire et publicités
- `images/` : photos des articles, nommées `<article>-NN.jpg`
- `couverture/`, `logos/`, `mascotte/`, `pubs/`, `pages/` : couverture, logos, mascotte Actuboy, pages de publicité et rendu de chaque page

Les images utilisées par le site sont des versions optimisées copiées dans `public/`.

## Déploiement

Le workflow `.github/workflows/deploy.yml` se déclenche à chaque push sur `main` (ou manuellement) :

1. installation des dépendances (`npm ci`) et build avec `NEXT_PUBLIC_BASE_PATH=/<nom-du-repo>`, pour que le site soit servi sous `/e-mag/` ;
2. ajout d'un fichier `.nojekyll` dans `out/` ;
3. publication de `out/` sur GitHub Pages.

Le site est donc accessible à l'adresse de la démo ci-dessus.
