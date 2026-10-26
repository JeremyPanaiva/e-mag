@AGENTS.md

# e-mag

Maquette d'un magazine en ligne, destinée à être présentée à un client. Objectif actuel : un rendu visuel convaincant, pas un produit en production (pas de CMS, pas d'auth, contenu factice).

## Stack
- Next.js 16 (App Router, Turbopack) + React 19 + TypeScript strict
- Tailwind CSS v4 (config CSS-first dans `src/app/globals.css`, pas de `tailwind.config.js`)
- Windows 11, Node 24, npm

## Commandes
- `npm run dev` — serveur local sur http://localhost:3000
- `npm run build` — vérifie que tout compile (à lancer avant chaque commit significatif)
- `npm run lint` — ESLint

## Structure
- `src/app/` — routes (une page = un dossier avec `page.tsx`)
- `src/components/` — composants réutilisables (PascalCase, un composant par fichier)
- `src/content/` — contenu factice typé (articles, auteurs, rubriques)
- `public/` — images et assets

## Conventions
- Server Components par défaut ; `"use client"` uniquement si interactivité.
- Images via `next/image`. Liens internes via `next/link`.
- Le contenu visible est en français ; le code (noms, commentaires) en anglais.
- Responsive obligatoire : tester à 390px et 1440px.
- Pas de nouvelle dépendance sans le signaler.

## Agents (dans `.claude/agents/`)
- `designer` (Sonnet) — tout travail d'UI/mise en page
- `content-writer` (Haiku) — contenu éditorial factice en français
- `browser-tester` (Sonnet) — vérification visuelle dans Chrome après changement UI

Déléguer à ces agents plutôt que tout faire dans la conversation principale : leur travail ne remplit pas le contexte principal.

## Économie de tokens (abonnement Pro)
- Une tâche = une conversation ; `/clear` entre deux tâches sans lien.
- `/compact` quand le contexte dépasse ~60 % (voir la barre de statut).
- Ne pas lire `node_modules/` sauf la doc Next ciblée (`node_modules/next/dist/docs/`).
