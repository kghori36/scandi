import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const faces = [
  ['Archivo Black', 400, 'fonts/archivo-black-400.woff2'],
  ['Space Mono', 400, 'fonts/space-mono-400.woff2'],
  ['Space Mono', 700, 'fonts/space-mono-700.woff2'],
];

const fontCss = faces.map(([fam, wght, path]) => {
  const b64 = readFileSync(path).toString('base64');
  return `@font-face{font-family:'${fam}';font-style:normal;font-weight:${wght};font-display:block;src:url(data:font/woff2;base64,${b64}) format('woff2');}`;
}).join('\n');

const srcs = readdirSync('src').filter((f) => f.endsWith('.dc.html'));
for (const f of srcs) {
  const out = readFileSync(`src/${f}`, 'utf8').replace('/*FONTS*/', fontCss);
  if (out.includes('/*FONTS*/')) throw new Error(`no font token replaced in ${f}`);
  writeFileSync(f, out);
  console.log(`built ${f}  ${(out.length / 1024).toFixed(0)} KB`);
}
