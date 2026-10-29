# Contribuer à NagosUI

Projet en développement actif ; les contributions sont bienvenues, mais ouvrez d'abord une issue pour discuter d'un changement important.

## Prérequis
Node >= 20, pnpm 10 (`packageManager` dans `package.json`).

## Workflow
1. Forkez ou créez une branche depuis `main` : `feat/…`, `fix/…`, `docs/…`.
2. `pnpm install --frozen-lockfile`
3. Vérifiez avant la PR : `pnpm typecheck` et `pnpm build`.
4. Commits conventionnels (`feat(ui): …`, `fix(showcase): …`, `docs: …`).
5. Ouvrez une PR vers `main` en remplissant le template.

## Règle de design
Aucune valeur visuelle codée en dur dans un composant : couleurs, rayons, ombres, easings viennent des tokens
(`packages/ui/src/styles/theme.css`, `packages/ui/src/tokens/motion.ts`).

Il n'y a pas encore de tests ni de script lint : ne présumez pas de leur existence.
