# play.captains-chest.com

The Captain's Chest Playground: an Angular (standalone, zoneless, strict TypeScript) page prerendered to static
files, listing the games. Add a game in `src/app/games/constants.ts`.

    pnpm install --frozen-lockfile
    pnpm build   # output: dist/site/browser
    pnpm dlx wrangler@4 pages deploy dist/site/browser --project-name play --branch main

Each game is its own Cloudflare Pages project on its own subdomain, e.g. Minesweeper (project `minesweeper`) at
https://minesweeper.play.captains-chest.com, built from captainDuckay/minesweeper's `dist/minesweeper/browser`.
