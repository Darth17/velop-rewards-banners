# VELOOP Rewards — polished single-page banner collection

This is one static, scrollable page containing all five VELOOP Rewards banners from the supplied PDF. A quiet brand masthead, editorial introduction, numbered section labels, and restrained footer complete the landing-page presentation. There is no feature selector, route switching, or functional product navigation.

## Banner clarity and motion

The five banner images have been AI-restored/upscaled from the PDF assets to roughly 1.6–2.3× their original dimensions and saved as PNGs in `src/assets/reference/enhanced/`. The images are displayed at native browser aspect ratio, with a modest contrast/saturation lift for a brighter, more legible presentation. AI restoration reconstructs fine pixels and may reinterpret tiny details; the original embedded JPEGs remain unchanged in `src/assets/reference/` for exact-source comparison. Upscaling cannot turn rasterized text into actual HTML/vector text; content and lettering remain part of each image.

All five banner visuals now drift gently up and down in a slow ambient loop; each has a slightly different duration/phase so the motion feels organic rather than synchronized. Hover adds subtle perspective, a little extra lift, pointer lighting, and a restrained blue/violet glow. Reduced-motion preferences disable the continuous animation and transitions. The figures are flattened into the artwork, so they move with the banner as one image rather than independently.

The CTA areas printed in the images have transparent, focusable hit regions. They are clickable for a small visual pressed state only—no action is connected. There is no outside focus outline; keyboard focus uses a discreet inset highlight inside the button area.

## Reference artwork and background

The page background uses `#161827`; a lighten blend integrates the artwork's dark edges into the page. The enhanced exports retain the reference banner proportions:

| Banner | Enhanced asset | Enhanced dimensions |
| --- | --- | ---: |
| Refer & Earn | `src/assets/reference/enhanced/refer-earn-reference.png` | 2496 × 1664 |
| Swap Center | `src/assets/reference/enhanced/swap-center-reference.png` | 2912 × 1456 |
| Bonus VEs | `src/assets/reference/enhanced/bonus-ves-reference.png` | 2912 × 1456 |
| Captcha Tasks | `src/assets/reference/enhanced/captcha-tasks-reference.png` | 2912 × 1456 |
| Exchange Center | `src/assets/reference/enhanced/exchange-center-reference.png` | 3552 × 1184 |

## Run from VS Code on Windows

1. Extract the ZIP. In VS Code choose **File → Open Folder** and select `velop-rewards-banners`—the folder that directly contains `package.json`.
2. In the VS Code terminal, verify the working folder with `ls package.json`. If that reports “No such file”, find the extracted package file using `find . -maxdepth 4 -name package.json -print`, then `cd` to its parent directory. Run npm commands only in the directory where `ls package.json` succeeds.
3. Install dependencies and start the local page:

```bash
npm ci
npm run dev
```

Open the localhost URL Vite prints in the terminal. For a production build and local preview, run `npm run build` and then `npm run preview`. No backend, account, API key, or database is required.

## Project structure

`src/main.jsx` mounts React and loads Bootstrap and global styles. `src/App.jsx` renders the masthead, introduction, five named sections, and footer. Each banner component imports its enhanced PNG; the original source JPEGs and reference PDF are retained for comparison. The shared `ReferenceBanner` component provides image semantics, inert CTA hit areas, pointer-driven depth, and ambient motion. CSS Modules contain the shared animation and feature-specific accent timing.

**Verification:** production build succeeds; the five images and CTA areas were checked in the local browser. **Deployment:** none. **GitHub push:** none.
