import type { LocaleText } from '@/content/types';
import { addDays } from '@/lib/date';

export type Paksha = 'shukla' | 'krishna';

export type HinduMonthId =
  | 'chaitra'
  | 'vaishakha'
  | 'jyeshtha-adhika'
  | 'jyeshtha'
  | 'ashadha'
  | 'shravana'
  | 'bhadrapada'
  | 'ashwina'
  | 'kartika'
  | 'margashirsha'
  | 'pausha'
  | 'magha'
  | 'phalguna';

export type PanchangDay = {
  date: string;
  month: HinduMonthId;
  paksha: Paksha;
  tithi: number;
};

export const HINDU_MONTH: Record<HinduMonthId, LocaleText> = {
  chaitra: { hi: 'चैत्र', en: 'Chaitra' },
  vaishakha: { hi: 'वैशाख', en: 'Vaishakha' },
  'jyeshtha-adhika': { hi: 'अधिक ज्येष्ठ', en: 'Adhika Jyeshtha' },
  jyeshtha: { hi: 'ज्येष्ठ', en: 'Jyeshtha' },
  ashadha: { hi: 'आषाढ़', en: 'Ashadha' },
  shravana: { hi: 'श्रावण', en: 'Shravana' },
  bhadrapada: { hi: 'भाद्रपद', en: 'Bhadrapada' },
  ashwina: { hi: 'आश्विन', en: 'Ashwina' },
  kartika: { hi: 'कार्तिक', en: 'Kartika' },
  margashirsha: { hi: 'मार्गशीर्ष', en: 'Margashirsha' },
  pausha: { hi: 'पौष', en: 'Pausha' },
  magha: { hi: 'माघ', en: 'Magha' },
  phalguna: { hi: 'फाल्गुन', en: 'Phalguna' },
};

const TITHI_HI = [
  '',
  'प्रतिपदा',
  'द्वितीया',
  'तृतीया',
  'चतुर्थी',
  'पंचमी',
  'षष्ठी',
  'सप्तमी',
  'अष्टमी',
  'नवमी',
  'दशमी',
  'एकादशी',
  'द्वादशी',
  'त्रयोदशी',
  'चतुर्दशी',
  'पूर्णिमा',
];

const TITHI_HI_K15 = 'अमावस्या';

const TITHI_EN = [
  '',
  'Pratipada',
  'Dwitiya',
  'Tritiya',
  'Chaturthi',
  'Panchami',
  'Shashthi',
  'Saptami',
  'Ashtami',
  'Navami',
  'Dashami',
  'Ekadashi',
  'Dwadashi',
  'Trayodashi',
  'Chaturdashi',
  'Purnima',
];

const MONTH_ORDER: HinduMonthId[] = [
  'chaitra',
  'vaishakha',
  'jyeshtha',
  'ashadha',
  'shravana',
  'bhadrapada',
  'ashwina',
  'kartika',
  'margashirsha',
  'pausha',
  'magha',
  'phalguna',
];

type Snap = { month: HinduMonthId; paksha: Paksha; tithi: number };

/** Civil-day snaps from the same 2026 North Indian list used for vrats. */
const SNAPS: Record<string, Snap> = {
  '2026-01-01': { month: 'pausha', paksha: 'shukla', tithi: 13 },
  '2026-01-03': { month: 'pausha', paksha: 'shukla', tithi: 15 },
  '2026-01-06': { month: 'magha', paksha: 'krishna', tithi: 4 },
  '2026-01-14': { month: 'magha', paksha: 'krishna', tithi: 11 },
  '2026-01-16': { month: 'magha', paksha: 'krishna', tithi: 13 },
  '2026-01-18': { month: 'magha', paksha: 'krishna', tithi: 15 },
  '2026-01-23': { month: 'magha', paksha: 'shukla', tithi: 5 },
  '2026-01-29': { month: 'magha', paksha: 'shukla', tithi: 11 },
  '2026-02-05': { month: 'phalguna', paksha: 'krishna', tithi: 4 },
  '2026-02-13': { month: 'phalguna', paksha: 'krishna', tithi: 11 },
  '2026-02-14': { month: 'phalguna', paksha: 'krishna', tithi: 13 },
  '2026-02-15': { month: 'phalguna', paksha: 'krishna', tithi: 14 },
  '2026-02-27': { month: 'phalguna', paksha: 'shukla', tithi: 11 },
  '2026-03-03': { month: 'phalguna', paksha: 'shukla', tithi: 15 },
  '2026-03-06': { month: 'chaitra', paksha: 'krishna', tithi: 4 },
  '2026-03-15': { month: 'chaitra', paksha: 'krishna', tithi: 11 },
  '2026-03-19': { month: 'chaitra', paksha: 'shukla', tithi: 1 },
  '2026-03-26': { month: 'chaitra', paksha: 'shukla', tithi: 9 },
  '2026-03-29': { month: 'chaitra', paksha: 'shukla', tithi: 11 },
  '2026-04-02': { month: 'chaitra', paksha: 'shukla', tithi: 15 },
  '2026-04-05': { month: 'vaishakha', paksha: 'krishna', tithi: 4 },
  '2026-04-13': { month: 'vaishakha', paksha: 'krishna', tithi: 11 },
  '2026-04-19': { month: 'vaishakha', paksha: 'shukla', tithi: 3 },
  '2026-04-27': { month: 'vaishakha', paksha: 'shukla', tithi: 11 },
  '2026-05-05': { month: 'jyeshtha-adhika', paksha: 'krishna', tithi: 4 },
  '2026-05-13': { month: 'jyeshtha-adhika', paksha: 'krishna', tithi: 11 },
  '2026-05-27': { month: 'jyeshtha-adhika', paksha: 'shukla', tithi: 11 },
  '2026-06-03': { month: 'jyeshtha-adhika', paksha: 'krishna', tithi: 4 },
  '2026-06-11': { month: 'jyeshtha-adhika', paksha: 'krishna', tithi: 11 },
  '2026-06-25': { month: 'jyeshtha', paksha: 'shukla', tithi: 11 },
  '2026-06-29': { month: 'jyeshtha', paksha: 'shukla', tithi: 15 },
  '2026-07-03': { month: 'ashadha', paksha: 'krishna', tithi: 4 },
  '2026-07-10': { month: 'ashadha', paksha: 'krishna', tithi: 11 },
  '2026-07-16': { month: 'ashadha', paksha: 'shukla', tithi: 2 },
  '2026-07-25': { month: 'ashadha', paksha: 'shukla', tithi: 11 },
  '2026-07-29': { month: 'ashadha', paksha: 'shukla', tithi: 15 },
  '2026-08-02': { month: 'shravana', paksha: 'krishna', tithi: 4 },
  '2026-08-09': { month: 'shravana', paksha: 'krishna', tithi: 11 },
  '2026-08-10': { month: 'shravana', paksha: 'krishna', tithi: 13 },
  '2026-08-11': { month: 'shravana', paksha: 'krishna', tithi: 14 },
  '2026-08-15': { month: 'shravana', paksha: 'shukla', tithi: 3 },
  '2026-08-17': { month: 'shravana', paksha: 'shukla', tithi: 5 },
  '2026-08-23': { month: 'shravana', paksha: 'shukla', tithi: 11 },
  '2026-08-25': { month: 'shravana', paksha: 'shukla', tithi: 13 },
  '2026-08-28': { month: 'shravana', paksha: 'shukla', tithi: 15 },
  '2026-08-31': { month: 'bhadrapada', paksha: 'krishna', tithi: 4 },
  '2026-09-04': { month: 'bhadrapada', paksha: 'krishna', tithi: 8 },
  '2026-09-07': { month: 'bhadrapada', paksha: 'krishna', tithi: 11 },
  '2026-09-14': { month: 'bhadrapada', paksha: 'shukla', tithi: 4 },
  '2026-09-22': { month: 'bhadrapada', paksha: 'shukla', tithi: 11 },
  '2026-09-25': { month: 'bhadrapada', paksha: 'shukla', tithi: 14 },
  '2026-09-29': { month: 'ashwina', paksha: 'krishna', tithi: 4 },
  '2026-10-06': { month: 'ashwina', paksha: 'krishna', tithi: 11 },
  '2026-10-11': { month: 'ashwina', paksha: 'shukla', tithi: 1 },
  '2026-10-19': { month: 'ashwina', paksha: 'shukla', tithi: 8 },
  '2026-10-20': { month: 'ashwina', paksha: 'shukla', tithi: 10 },
  '2026-10-22': { month: 'ashwina', paksha: 'shukla', tithi: 11 },
  '2026-10-29': { month: 'kartika', paksha: 'krishna', tithi: 4 },
  '2026-11-05': { month: 'kartika', paksha: 'krishna', tithi: 11 },
  '2026-11-06': { month: 'kartika', paksha: 'krishna', tithi: 13 },
  '2026-11-08': { month: 'kartika', paksha: 'krishna', tithi: 14 },
  '2026-11-10': { month: 'kartika', paksha: 'shukla', tithi: 1 },
  '2026-11-11': { month: 'kartika', paksha: 'shukla', tithi: 2 },
  '2026-11-15': { month: 'kartika', paksha: 'shukla', tithi: 6 },
  '2026-11-20': { month: 'kartika', paksha: 'shukla', tithi: 11 },
  '2026-11-24': { month: 'kartika', paksha: 'shukla', tithi: 15 },
  '2026-11-27': { month: 'margashirsha', paksha: 'krishna', tithi: 4 },
  '2026-12-04': { month: 'margashirsha', paksha: 'krishna', tithi: 11 },
  '2026-12-20': { month: 'margashirsha', paksha: 'shukla', tithi: 11 },
  '2026-12-23': { month: 'margashirsha', paksha: 'shukla', tithi: 15 },
  '2026-12-26': { month: 'pausha', paksha: 'krishna', tithi: 4 },
};

function nextMonth(month: HinduMonthId): HinduMonthId {
  if (month === 'jyeshtha-adhika') {
    return 'jyeshtha';
  }
  const index = MONTH_ORDER.indexOf(month);
  return MONTH_ORDER[(index + 1) % MONTH_ORDER.length];
}

function advance(day: Snap): Snap {
  if (day.tithi < 15) {
    return { ...day, tithi: day.tithi + 1 };
  }
  if (day.paksha === 'shukla') {
    return { month: nextMonth(day.month), paksha: 'krishna', tithi: 1 };
  }
  return { month: day.month, paksha: 'shukla', tithi: 1 };
}

function buildYear(): Record<string, PanchangDay> {
  const map: Record<string, PanchangDay> = {};
  let cursor = '2026-01-01';
  let state: Snap = SNAPS[cursor];
  while (cursor <= '2026-12-31') {
    if (SNAPS[cursor]) {
      state = SNAPS[cursor];
    }
    map[cursor] = { date: cursor, ...state };
    state = advance(state);
    cursor = addDays(cursor, 1);
  }
  return map;
}

const YEAR_2026 = buildYear();

export function getPanchangDay(date: string): PanchangDay | undefined {
  return YEAR_2026[date];
}

export function panchangDaysInMonth(yearMonth: string): PanchangDay[] {
  return Object.values(YEAR_2026).filter((day) => day.date.startsWith(yearMonth));
}

export function tithiName(day: PanchangDay, lang: 'hi' | 'en'): string {
  if (day.paksha === 'krishna' && day.tithi === 15) {
    return lang === 'hi' ? TITHI_HI_K15 : 'Amavasya';
  }
  return lang === 'hi' ? TITHI_HI[day.tithi] : TITHI_EN[day.tithi];
}

export function pakshaName(paksha: Paksha, lang: 'hi' | 'en'): string {
  if (lang === 'hi') {
    return paksha === 'shukla' ? 'शुक्ल' : 'कृष्ण';
  }
  return paksha === 'shukla' ? 'Shukla' : 'Krishna';
}

export function tithiShort(day: PanchangDay, lang: 'hi' | 'en'): string {
  if (day.paksha === 'krishna' && day.tithi === 15) {
    return lang === 'hi' ? 'अमा' : 'Ama';
  }
  if (day.tithi === 15) {
    return lang === 'hi' ? 'पूर्ण' : 'Pur';
  }
  const pak = lang === 'hi' ? (day.paksha === 'shukla' ? 'शु' : 'कृ') : day.paksha === 'shukla' ? 'S' : 'K';
  return `${pak}${day.tithi}`;
}

export function hinduMonthLabel(yearMonth: string, lang: 'hi' | 'en'): string {
  const counts = new Map<HinduMonthId, number>();
  for (const day of panchangDaysInMonth(yearMonth)) {
    counts.set(day.month, (counts.get(day.month) ?? 0) + 1);
  }
  const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 2);
  return ranked.map(([id]) => HINDU_MONTH[id][lang]).join(' / ');
}

export function weekdayIndex(isoDate: string): number {
  return new Date(`${isoDate}T12:00:00+05:30`).getDay();
}

export function gregorianDaysInMonth(yearMonth: string): string[] {
  const [year, month] = yearMonth.split('-').map(Number);
  const last = new Date(Date.UTC(year, month, 0)).getUTCDate();
  return Array.from({ length: last }, (_, index) => `${yearMonth}-${String(index + 1).padStart(2, '0')}`);
}
