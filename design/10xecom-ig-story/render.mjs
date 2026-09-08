import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
mkdirSync('png', { recursive: true });

import { readdirSync } from 'node:fs';
for (const name of readdirSync('.').filter((f) => f.endsWith('.dc.html')).map((f) => f.replace('.dc.html', ''))) {
  const src = readFileSync(`${name}.dc.html`, 'utf8');
  const style = src.match(/<helmet>\s*<style>([\s\S]*?)<\/style>\s*<\/helmet>/)[1];
  const markup = src.match(/<\/helmet>([\s\S]*?)<\/x-dc>/)[1];
  const page = `<!doctype html><html><head><meta charset="utf-8"><style>
html,body{margin:0;padding:0;background:#0B0B0F;}
${style}
</style></head><body>${markup}</body></html>`;
  const tmp = `png/${name}.preview.html`;
  writeFileSync(tmp, page);
  execFileSync(CHROME, [
    '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1', '--window-size=1080,1920',
    `--screenshot=png/10xecom-story-${name.toLowerCase()}.png`,
    `file://${process.cwd()}/${tmp}`,
  ], { stdio: 'pipe' });
  console.log(`rendered ${name}`);
}
