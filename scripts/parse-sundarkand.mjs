/**
 * Split public-domain Tulsidas Sundarkand into recitation units.
 */
import fs from 'node:fs';

const raw = fs.readFileSync(
  '/Users/amitgupta/.cursor/projects/Users-amitgupta-Desktop-BhaktiPath/agent-tools/d8b5ed43-c755-4418-a2ff-7c61473c932c.txt',
  'utf8',
);

const start = raw.indexOf('शान्तं शाश्वतमप्रमेयमनघं');
const end = raw.indexOf('मासपारायण');
if (start < 0 || end < 0) {
  console.error('Could not find Sundarkand bounds', { start, end });
  process.exit(1);
}

let text = raw.slice(start, end);
text = text
  .replace(/\s+/g, ' ')
  .replace(/दो0\s*=\s*/g, ' ॥DOHA॥ ')
  .replace(/दो०\s*=\s*/g, ' ॥DOHA॥ ')
  .replace(/दो0[-–—]?\s*/g, ' ॥DOHA॥ ')
  .replace(/दो०[-–—]?\s*/g, ' ॥DOHA॥ ')
  .replace(/दो[-–—]\s*/g, ' ॥DOHA॥ ')
  .replace(/सो0[-–—]?\s*/g, ' ॥SORTHA॥ ')
  .replace(/छं0[-–—]?\s*/g, ' ॥CHHAND॥ ')
  .replace(/छं=/g, ' ॥CHHAND॥ ')
  .trim();

function formatHi(hi) {
  return hi
    .replace(/\s+/g, ' ')
    .replace(/\s*॥\s*/g, '॥\n')
    .replace(/\s*।\s*/g, '।\n')
    .replace(/[कखग]$/u, '')
    .replace(/^\d+[कखग]?/u, '')
    .replace(/[=\-–—]+/g, '')
    .replace(/\n+/g, '\n')
    .trim();
}

function isNoise(hi) {
  const compact = hi.replace(/\s+/g, '');
  return compact.length < 12 || /^[\d॥।\sकखग]+$/u.test(compact);
}

const units = [];
const push = (kind, hi) => {
  const cleaned = formatHi(hi);
  if (!cleaned || isNoise(cleaned)) return;
  units.push({ kind, hi: cleaned });
};

const chunks = text.split(/॥(DOHA|SORTHA|CHHAND)॥/);
let mode = 'chaupai';
for (let i = 0; i < chunks.length; i++) {
  const part = chunks[i].trim();
  if (!part) continue;
  if (part === 'DOHA' || part === 'SORTHA' || part === 'CHHAND') {
    mode = part === 'DOHA' ? 'doha' : part === 'SORTHA' ? 'sortha' : 'chhand';
    continue;
  }
  if (mode === 'doha' || mode === 'sortha') {
    const m = part.match(/^(.{12,240}?[।॥][^।॥]{8,160}[।॥])\s*(.*)$/u);
    if (m) {
      push(mode, m[1]);
      mode = 'chaupai';
      const rest = m[2].trim();
      if (rest) {
        for (const c of rest.split(/(?<=॥)/u).map((s) => s.trim()).filter(Boolean)) {
          if (c.includes('शान्तं') || c.includes('नान्या स्पृहा') || c.includes('अतुलितबलधामं')) push('shloka', c);
          else push('chaupai', c);
        }
      }
    } else {
      push(mode, part);
      mode = 'chaupai';
    }
  } else if (mode === 'chhand') {
    push('chhand', part);
    mode = 'chaupai';
  } else {
    for (const c of part.split(/(?<=॥)/u).map((s) => s.trim()).filter(Boolean)) {
      if (c.includes('शान्तं') || c.includes('नान्या स्पृहा') || c.includes('अतुलितबलधामं')) push('shloka', c);
      else push('chaupai', c);
    }
  }
}

const groups = [];
let current = [];
for (const unit of units) {
  current.push(unit);
  if (unit.kind === 'doha' || unit.kind === 'sortha') {
    groups.push(current);
    current = [];
  }
}
if (current.length) groups.push(current);

const out = {
  unitCount: units.length,
  groupCount: groups.length,
  byKind: units.reduce((acc, u) => {
    acc[u.kind] = (acc[u.kind] ?? 0) + 1;
    return acc;
  }, {}),
  units,
  groups: groups.map((g) => ({
    kinds: g.map((u) => u.kind).join('+'),
    hi: g.map((u) => u.hi).join('\n\n'),
    parts: g,
  })),
};

const dest = new URL('./sundarkand-parsed.json', import.meta.url);
fs.writeFileSync(dest, JSON.stringify(out, null, 2));
console.log(out.unitCount, out.byKind, 'groups', out.groupCount);
groups.forEach((g, i) => {
  const preview = g[0].hi.split('\n')[0].slice(0, 48);
  console.log(String(i + 1).padStart(2), g.map((u) => u.kind[0]).join(''), preview);
});
