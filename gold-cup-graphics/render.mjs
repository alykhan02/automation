import { chromium } from 'playwright';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const postsDir = path.join(root, 'posts');
const outDir = path.join(root, 'out');

// --scale 2 renders 2160×2160 (for print or retina); Instagram itself shows posts at 1080×1080
const args = process.argv.slice(2);
const scaleAt = args.indexOf('--scale');
const scale = scaleAt === -1 ? 1 : Number(args.splice(scaleAt, 2)[1]);
const files = args.length
  ? args.map(f => path.resolve(f))
  : (await readdir(postsDir)).filter(f => f.endsWith('.json')).sort().map(f => path.join(postsDir, f));

await mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: scale });

for (const file of files) {
  const post = JSON.parse(await readFile(file, 'utf8'));
  await page.goto(pathToFileURL(path.join(root, 'template.html')).href);
  const warnings = await page.evaluate(p => window.render(p), post);
  const out = path.join(outDir, `${path.basename(file, '.json')}.png`);
  await page.screenshot({ path: out });
  console.log(`${path.relative(root, out)}${warnings.length ? '\n  ! ' + warnings.join('\n  ! ') : ''}`);
}

await browser.close();
