import type { ImageSource } from 'expo-image';

import type { LocaleText } from '@/content/types';

export type DeityKey =
  | 'ram'
  | 'hanuman'
  | 'ganesh'
  | 'shiva'
  | 'durga'
  | 'lakshmi'
  | 'krishna'
  | 'vishnu'
  | 'saraswati'
  | 'surya';

export type DeityHint = {
  id?: string;
  deity?: string | LocaleText;
  title?: string | LocaleText;
  type?: string;
};

export const deityImages: Record<DeityKey, ImageSource> = {
  ram: require('../../assets/images/deities/ram.png'),
  hanuman: require('../../assets/images/deities/hanuman.png'),
  ganesh: require('../../assets/images/deities/ganesh.png'),
  shiva: require('../../assets/images/deities/shiva.png'),
  durga: require('../../assets/images/deities/durga.png'),
  lakshmi: require('../../assets/images/deities/lakshmi.png'),
  krishna: require('../../assets/images/deities/krishna.png'),
  vishnu: require('../../assets/images/deities/vishnu.png'),
  saraswati: require('../../assets/images/deities/saraswati.png'),
  surya: require('../../assets/images/deities/surya.png'),
};

export const darshanDeities: { key: DeityKey; aartiId: string; name: LocaleText }[] = [
  { key: 'ram', aartiId: 'ram-aarti', name: { hi: 'श्री राम', en: 'Shri Ram' } },
  { key: 'hanuman', aartiId: 'hanuman-aarti', name: { hi: 'हनुमान', en: 'Hanuman' } },
  { key: 'ganesh', aartiId: 'ganesh', name: { hi: 'गणेश', en: 'Ganesha' } },
  { key: 'shiva', aartiId: 'shiv', name: { hi: 'शिव', en: 'Shiva' } },
  { key: 'durga', aartiId: 'durga', name: { hi: 'दुर्गा', en: 'Durga' } },
  { key: 'lakshmi', aartiId: 'lakshmi', name: { hi: 'लक्ष्मी', en: 'Lakshmi' } },
  { key: 'krishna', aartiId: 'krishna', name: { hi: 'कृष्ण', en: 'Krishna' } },
  { key: 'vishnu', aartiId: 'jagdish', name: { hi: 'विष्णु', en: 'Vishnu' } },
  { key: 'saraswati', aartiId: 'ambey-gauri', name: { hi: 'सरस्वती', en: 'Saraswati' } },
  { key: 'surya', aartiId: 'jagdish', name: { hi: 'सूर्य', en: 'Surya' } },
];

const CONTENT_DEITY: Record<string, DeityKey> = {
  'ram-aarti': 'ram',
  jagdish: 'vishnu',
  ganesh: 'ganesh',
  'hanuman-aarti': 'hanuman',
  shiv: 'shiva',
  durga: 'durga',
  lakshmi: 'lakshmi',
  krishna: 'krishna',
  santoshi: 'durga',
  'ambey-gauri': 'durga',
  'hanuman-chalisa': 'hanuman',
  'bajrang-baan': 'hanuman',
  'sankat-mochan-ashtak': 'hanuman',
  'ram-stuti': 'ram',
  'ganesh-chalisa': 'ganesh',
  'gayatri-mantra': 'saraswati',
  mahamrityunjay: 'shiva',
  'ekadashi-mahatmya': 'vishnu',
  'sankashti-katha': 'ganesh',
  'pradosh-katha': 'shiva',
  'santoshi-katha': 'durga',
  'satyanarayan-vidhi': 'vishnu',
  satyanarayan: 'vishnu',
};

function flatten(value?: string | LocaleText): string {
  if (!value) {
    return '';
  }
  if (typeof value === 'string') {
    return value;
  }
  return `${value.hi} ${value.en}`;
}

function fromWords(text: string): DeityKey | undefined {
  const t = text.toLowerCase();
  if (/हनुमान|hanuman|bajrang/.test(t)) {
    return 'hanuman';
  }
  if (/गणेश|ganesh|sankashti|संकष्ट/.test(t)) {
    return 'ganesh';
  }
  if (/कृष्ण|krishna|जगन्नाथ|jagannath|holi|गोवर्धन|govardhan/.test(t)) {
    return 'krishna';
  }
  if (/सरस्वती|saraswati|gayatri|गायत्री|बसंत|basant/.test(t)) {
    return 'saraswati';
  }
  if (/सूर्य|surya|संक्रांति|sankranti|छठ|chhath|lohri|लोहड़/.test(t)) {
    return 'surya';
  }
  if (/लक्ष्मी|lakshmi|दीपावली|diwali|धनतेरस|dhanteras|अक्षय/.test(t)) {
    return 'lakshmi';
  }
  if (/दुर्गा|durga|गौरी|gauri|ambey|अम्बे|santoshi|संतोषी|नवरात्र|navratri|तीज|teej/.test(t)) {
    return 'durga';
  }
  if (/शिव|shiv|प्रदोष|pradosh|महादेव|shankar|नाग पंचमी|nag /.test(t)) {
    return 'shiva';
  }
  if (/\bराम\b|\bram\b|raghu|सीता|sita|दशहरा|dussehra/.test(t)) {
    return 'ram';
  }
  if (/विष्णु|vishnu|जगदीश|jagdish|satyanarayan|सत्यनारायण|एकादशी|ekadashi/.test(t)) {
    return 'vishnu';
  }
  return undefined;
}

export function resolveDeity(hint?: DeityHint): DeityKey {
  if (!hint) {
    return 'vishnu';
  }
  if (hint.id) {
    if (CONTENT_DEITY[hint.id]) {
      return CONTENT_DEITY[hint.id];
    }
    if (hint.id.startsWith('sundarkand')) {
      return 'hanuman';
    }
  }
  const fromDeity = fromWords(flatten(hint.deity));
  if (fromDeity) {
    return fromDeity;
  }
  if (hint.type === 'ekadashi' || hint.type === 'purnima') {
    return 'vishnu';
  }
  if (hint.type === 'pradosh' || hint.type === 'shivratri') {
    return 'shiva';
  }
  if (hint.type === 'sankashti') {
    return 'ganesh';
  }
  return fromWords(`${flatten(hint.title)} ${hint.id ?? ''}`) ?? 'vishnu';
}
