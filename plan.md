# VELOOP Rewards — polished single-page banner collection

## Purpose
Present five exact reference banners together as one polished, responsive page. Use a static wordmark-style masthead, considered introduction, clearly numbered banner sections, and a restrained closing footer. Keep the page non-routing and avoid navigation menus or functional service actions.

## Layout and typography
Use the existing `#161827` navy background, a centered responsive content width, calm gold/blue accents, intentional whitespace, and clear typography. The artwork remains full-width in its original proportions and blends into the page background. Give each of the five sections a small index/category line so the long page feels intentional and scannable without adding extra frames around the source images.

## Interactions
All five banner images retain an inert, keyboard-focusable hit area over their printed primary CTA. There is no click handler, route, or external action. Hover adds a gentle perspective tilt, slight lift, cursor highlight, and soft background glow; respect `prefers-reduced-motion`. The supplied people and 3D-like objects are rasterized inside source images, so the effect applies to the whole artwork and cannot independently animate individual characters. Explain this limitation accurately; independent character motion requires layers or model assets.

## Project structure and handoff
`src/App.jsx` owns the masthead, intro, five numbered banner sections, and footer. The five feature components import source images from `src/assets/reference/`; `ReferenceBanner` owns shared image/hover/CTA behavior; CSS Modules provide scoped accents; `src/styles/App.module.css` defines the polished responsive presentation. Keep `docs/reference-brief.pdf`, README setup instructions, and npm lockfile in the project. Run `npm ci`, `npm run build`, then deliver the ZIP for local VS Code use. Do not deploy or push to GitHub.
