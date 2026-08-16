import { vratEvents } from '@/content/calendar';
import type { LocaleText } from '@/content/types';
import { addDays } from '@/lib/date';

export type VratCycleId =
  | 'santoshi-16'
  | 'sankashti-2026'
  | 'shravan-somvar-2026'
  | 'chaitra-navratri-2026'
  | 'sharad-navratri-2026';

export type VratCycle = {
  id: VratCycleId;
  title: LocaleText;
  summary: LocaleText;
  deityHint: { id?: string; deity?: LocaleText };
  dates: string[];
  flexibleStart?: boolean;
};

function range(from: string, to: string): string[] {
  const dates: string[] = [];
  let cursor = from;
  while (cursor <= to) {
    dates.push(cursor);
    cursor = addDays(cursor, 1);
  }
  return dates;
}

function weekday(iso: string): number {
  return new Date(`${iso}T12:00:00+05:30`).getDay();
}

export function sixteenFridaysFrom(start: string): string[] {
  let cursor = start;
  while (weekday(cursor) !== 5) {
    cursor = addDays(cursor, 1);
  }
  const dates: string[] = [];
  for (let index = 0; index < 16; index += 1) {
    dates.push(cursor);
    cursor = addDays(cursor, 7);
  }
  return dates;
}

const sankashtiDates = vratEvents.filter((item) => item.type === 'sankashti').map((item) => item.date);

export function getVratCycles(santoshiStart?: string): VratCycle[] {
  return [
    {
      id: 'santoshi-16',
      title: { hi: 'संतोषी माँ · १६ शुक्रवार', en: 'Santoshi Mata · 16 Fridays' },
      summary: {
        hi: 'गुड़-चना, खट्टा नहीं, कथा और आरती। सोलहवें शुक्रवार उद्यापन।',
        en: 'Jaggery-gram, no sour food, katha and aarti. Udyapan on the sixteenth Friday.',
      },
      deityHint: { id: 'santoshi' },
      dates: sixteenFridaysFrom(santoshiStart ?? '2026-01-02'),
      flexibleStart: true,
    },
    {
      id: 'sankashti-2026',
      title: { hi: 'संकष्टी चतुर्थी · २०२६', en: 'Sankashti Chaturthi · 2026' },
      summary: {
        hi: 'मासिक गणेश व्रत। चंद्रदर्शन कर पारणा।',
        en: 'Monthly Ganesh vrat. Parana after moon-sight.',
      },
      deityHint: { id: 'sankashti-katha', deity: { hi: 'गणेश', en: 'Ganesha' } },
      dates: sankashtiDates,
    },
    {
      id: 'shravan-somvar-2026',
      title: { hi: 'श्रावण सोमवार · २०२६', en: 'Shravan Mondays · 2026' },
      summary: {
        hi: 'उत्तर भारत पौर्णिमांत श्रावण के सोम — शिव अभिषेक और आरती।',
        en: 'Purnimanta Shravan Mondays in North India — Shiva abhishek and aarti.',
      },
      deityHint: { id: 'shiv' },
      dates: ['2026-08-03', '2026-08-10', '2026-08-17', '2026-08-24'],
    },
    {
      id: 'chaitra-navratri-2026',
      title: { hi: 'चैत्र नवरात्रि · २०२६', en: 'Chaitra Navratri · 2026' },
      summary: {
        hi: 'घटस्थापना से राम नवमी तक — माँ दुर्गा के नौ दिन।',
        en: 'From Ghatasthapana to Ram Navami — nine days of Durga.',
      },
      deityHint: { id: 'durga' },
      dates: range('2026-03-19', '2026-03-27'),
    },
    {
      id: 'sharad-navratri-2026',
      title: { hi: 'शारदीय नवरात्रि · २०२६', en: 'Sharad Navratri · 2026' },
      summary: {
        hi: 'आश्विन शुक्ल १ से विजयदशमी — घर का गरबा/कथा क्रम।',
        en: 'Ashwina Shukla 1 to Vijayadashami — home garba / katha sequence.',
      },
      deityHint: { id: 'durga' },
      dates: range('2026-10-11', '2026-10-20'),
    },
  ];
}
