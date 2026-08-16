import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { groupEn } from './sundarkand-en.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const parsed = JSON.parse(fs.readFileSync(path.join(__dirname, 'sundarkand-parsed.json'), 'utf8'));

const ramHanuman = { hi: 'श्री राम / हनुमान', en: 'Shri Ram / Hanuman' };

const sections = [
  {
    id: 'sundarkand-01',
    title: { hi: 'सुंदरकांड — मंगलाचरण', en: 'Sundarkand — mangalacharan' },
    summary: {
      hi: 'पाठ आरंभ: संस्कृत मंगलाचरण — राम, भक्ति और पवनसुत की वंदना।',
      en: 'Begin here: the Sanskrit invocation — vandana of Ram, bhakti and the Wind’s son.',
    },
    deity: ramHanuman,
    groups: [0],
    only: ['shloka'],
  },
  {
    id: 'sundarkand-02',
    title: { hi: 'सुंदरकांड — जामवंत और संकल्प', en: 'Sundarkand — Jamavant and the vow' },
    summary: {
      hi: 'जामवंत के वचन, हनुमान का पर्वत-आकार और मैनाक से भेंट।',
      en: 'Jamavant’s words, Hanuman’s mountain form, and the meeting with Mainak.',
    },
    deity: { hi: 'हनुमान जी', en: 'Hanuman Ji' },
    groups: [0],
    skip: ['shloka'],
  },
  {
    id: 'sundarkand-03',
    title: { hi: 'सुंदरकांड — सागर लंघन', en: 'Sundarkand — crossing the ocean' },
    summary: {
      hi: 'सुरसा की परीक्षा, सिंहिका वध, और लंका का पहला दर्शन।',
      en: 'The trial of Surasa, the slaying of Simhika, and the first sight of Lanka.',
    },
    deity: { hi: 'हनुमान जी', en: 'Hanuman Ji' },
    groups: [1, 2],
  },
  {
    id: 'sundarkand-04',
    title: { hi: 'सुंदरकांड — लंका प्रवेश', en: 'Sundarkand — entering Lanka' },
    summary: {
      hi: 'लंकिनी से भेंट, नगर-प्रवेश, रावण-भवन और तुलसी का घर।',
      en: 'Meeting Lankini, entering the city, Ravan’s palace and the house of tulsi.',
    },
    deity: { hi: 'हनुमान जी', en: 'Hanuman Ji' },
    groups: [3, 4],
  },
  {
    id: 'sundarkand-05',
    title: { hi: 'सुंदरकांड — विभीषण मिलाप', en: 'Sundarkand — meeting Vibhishan' },
    summary: {
      hi: 'विभीषण से पहचान, राम-कथा और सीता के स्थान का पता।',
      en: 'Recognising Vibhishan, Ram-katha, and learning where Sita stays.',
    },
    deity: { hi: 'विभीषण / हनुमान', en: 'Vibhishan / Hanuman' },
    groups: [5, 6, 7],
  },
  {
    id: 'sundarkand-06',
    title: { hi: 'सुंदरकांड — अशोक वाटिका', en: 'Sundarkand — Ashok Vatika' },
    summary: {
      hi: 'सीता का दीन रूप, रावण का आना, त्रिजटा का स्वप्न और मुद्रिका।',
      en: 'Sita’s worn state, Ravan’s coming, Trijata’s dream and the ring.',
    },
    deity: { hi: 'सीता माता', en: 'Mata Sita' },
    groups: [8, 9, 10, 11],
  },
  {
    id: 'sundarkand-07',
    title: { hi: 'सुंदरकांड — सीता मिलाप', en: 'Sundarkand — meeting Sita' },
    summary: {
      hi: 'रामदूत का परिचय, प्रभु का सन्देश, विशाल रूप और आशीष।',
      en: 'The messenger known, the Lord’s message, the vast form and Sita’s blessing.',
    },
    deity: { hi: 'सीता माता / हनुमान', en: 'Mata Sita / Hanuman' },
    groups: [12, 13, 14, 15, 16],
  },
  {
    id: 'sundarkand-08',
    title: { hi: 'सुंदरकांड — अक्षयकुमार वध', en: 'Sundarkand — Akshayakumar' },
    summary: {
      hi: 'वाटिका उजाड़ना, रक्षकों का संहार और अक्षयकुमार का पतन।',
      en: 'The wrecking of the grove, the guards slain, and the fall of Akshayakumar.',
    },
    deity: { hi: 'हनुमान जी', en: 'Hanuman Ji' },
    groups: [17],
  },
  {
    id: 'sundarkand-09',
    title: { hi: 'सुंदरकांड — मेघनाद और रावण सभा', en: 'Sundarkand — Meghnad and Ravan’s court' },
    summary: {
      hi: 'ब्रह्मास्त्र, नागपाश, रावण से संवाद और हनुमान का हित-उपदेश।',
      en: 'Brahmastra, nagpash, dialogue with Ravan and Hanuman’s counsel.',
    },
    deity: { hi: 'हनुमान जी', en: 'Hanuman Ji' },
    groups: [18, 19, 20, 21, 22, 23],
  },
  {
    id: 'sundarkand-10',
    title: { hi: 'सुंदरकांड — लंका दहन', en: 'Sundarkand — burning of Lanka' },
    summary: {
      hi: 'पूँछ में आग, नगर-दहन और सीता के आगे पुनः खड़े होना।',
      en: 'Fire on the tail, the city ablaze, and standing again before Sita.',
    },
    deity: { hi: 'हनुमान जी', en: 'Hanuman Ji' },
    groups: [24, 25],
  },
  {
    id: 'sundarkand-11',
    title: { hi: 'सुंदरकांड — वापसी और राम को सन्देश', en: 'Sundarkand — return and message to Ram' },
    summary: {
      hi: 'चूड़ामणि, मधुवन, जामवंत-कथन, सीता का सन्देश और सेना का प्रस्थान।',
      en: 'The chudamani, Madhuvan, Jamavant’s telling, Sita’s message and the march.',
    },
    deity: { hi: 'श्री राम', en: 'Shri Ram' },
    groups: [26, 27, 28, 29, 30, 31, 32, 33, 34],
  },
  {
    id: 'sundarkand-12',
    title: { hi: 'सुंदरकांड — मंदोदरी और विभीषण नीति', en: 'Sundarkand — Mandodari and Vibhishan’s niti' },
    summary: {
      hi: 'मंदोदरी की विनय, कुमंत्र, विभीषण का उपदेश और लात।',
      en: 'Mandodari’s plea, bad counsel, Vibhishan’s teaching and the kick.',
    },
    deity: { hi: 'विभीषण', en: 'Vibhishan' },
    groups: [35, 36, 37, 38, 39, 40],
  },
  {
    id: 'sundarkand-13',
    title: { hi: 'सुंदरकांड — विभीषण की शरण', en: 'Sundarkand — Vibhishan’s refuge' },
    summary: {
      hi: 'शरणागत-वत्सल राम, विभीषण का दंडवत और राजतिलक।',
      en: 'Ram who loves those who come for shelter, Vibhishan’s dandavat and the royal tilak.',
    },
    deity: { hi: 'श्री राम / विभीषण', en: 'Shri Ram / Vibhishan' },
    groups: [41, 42, 43, 44, 45, 46, 47, 48, 49],
  },
  {
    id: 'sundarkand-14',
    title: { hi: 'सुंदरकांड — सागर और सेतु', en: 'Sundarkand — ocean and the bridge' },
    summary: {
      hi: 'दूत-पाती, तीन दिन की विनय, राम का कोप, सागर-शरण और फलश्रुति। सुंदरकांड यहीं पूर्ण।',
      en: 'The letter, three days of prayer, Ram’s wrath, the ocean’s refuge and phalashruti. Sundarkand closes here.',
    },
    deity: { hi: 'श्री राम', en: 'Shri Ram' },
    groups: [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  },
];

function filterParts(parts, section) {
  return parts.filter((p) => {
    if (section.only) return section.only.includes(p.kind);
    if (section.skip) return !section.skip.includes(p.kind);
    return true;
  });
}

function sentencesOf(groupIndex) {
  return (groupEn[groupIndex] ?? '')
    .split('|')
    .map((s) => s.trim())
    .filter(Boolean);
}

function toBlocks(parts, ens) {
  const blocks = [];
  let ei = 0;
  let i = 0;
  while (i < parts.length) {
    const p = parts[i];
    if (p.kind === 'chaupai' && parts[i + 1]?.kind === 'chaupai') {
      blocks.push({
        label: 'chaupai',
        hi: `${p.hi}\n${parts[i + 1].hi}`,
        en: ens[ei] ?? ens[ens.length - 1] ?? '',
      });
      ei += 1;
      i += 2;
      continue;
    }
    blocks.push({
      label: p.kind,
      hi: p.hi,
      en: ens[ei] ?? ens[ens.length - 1] ?? '',
    });
    ei += 1;
    i += 1;
  }
  return blocks;
}

function tsString(value) {
  return JSON.stringify(value);
}

const outDir = path.join(__dirname, '../src/content/sundarkand');
fs.mkdirSync(outDir, { recursive: true });

const partFiles = [];
let totalVerses = 0;

for (const [index, section] of sections.entries()) {
  const verses = [];
  for (const gi of section.groups) {
    const group = parsed.groups[gi];
    const ens = sentencesOf(gi);
    let blocks = toBlocks(group.parts, ens);
    if (section.only) blocks = blocks.filter((b) => section.only.includes(b.label));
    if (section.skip) blocks = blocks.filter((b) => !section.skip.includes(b.label));
    verses.push(...blocks);
  }
  totalVerses += verses.length;

  const body = verses
    .map((v) => {
      return `    {
      label: '${v.label}',
      hi: ${tsString(v.hi)},
      en: ${tsString(v.en)},
    }`;
    })
    .join(',\n');

  const file = `part-${String(index + 1).padStart(2, '0')}.ts`;
  const contents = `import type { Scripture } from '@/content/types';

export const sundarkandPart${String(index + 1).padStart(2, '0')}: Scripture = {
  id: '${section.id}',
  kind: 'path',
  group: 'sundarkand',
  seriesId: 'sundarkand',
  seriesIndex: ${index + 1},
  seriesTotal: ${sections.length},
  deity: ${tsString(section.deity).replace(/"hi"/g, 'hi').replace(/"en"/g, 'en')},
  title: ${tsString(section.title).replace(/"hi"/g, 'hi').replace(/"en"/g, 'en')},
  summary: ${tsString(section.summary).replace(/"hi"/g, 'hi').replace(/"en"/g, 'en')},
  verses: [
${body}
  ],
};
`;

  fs.writeFileSync(path.join(outDir, file), contents);
  partFiles.push({ file, exportName: `sundarkandPart${String(index + 1).padStart(2, '0')}` });
}

const indexTs = `import type { Scripture } from '@/content/types';
${partFiles.map((p) => `import { ${p.exportName} } from '@/content/sundarkand/${p.file.replace('.ts', '')}';`).join('\n')}

export const sundarkandSections: Scripture[] = [
  ${partFiles.map((p) => p.exportName).join(',\n  ')},
];

export function getSundarkandSection(id: string): Scripture | undefined {
  return sundarkandSections.find((item) => item.id === id);
}

export function sundarkandNeighbors(id: string): { prev?: Scripture; next?: Scripture } {
  const index = sundarkandSections.findIndex((item) => item.id === id);
  if (index < 0) return {};
  return {
    prev: sundarkandSections[index - 1],
    next: sundarkandSections[index + 1],
  };
}
`;

fs.writeFileSync(path.join(outDir, 'index.ts'), indexTs);
console.log('sections', sections.length, 'verses', totalVerses);
console.log(partFiles.map((p) => p.file).join('\n'));
