import type { LocaleText, VratEvent } from '@/content/types';
import { isUpvaas } from '@/content/calendar';
import { eventSlug } from '@/content/vrat-guides';

export type KramStep = {
  id: string;
  title: LocaleText;
  body: LocaleText;
  href?: string;
};

function L(hi: string, en: string): LocaleText {
  return { hi, en };
}

function aartiFor(event?: VratEvent): string {
  const slug = event ? eventSlug(event.id) : '';
  if (event?.type === 'pradosh' || event?.type === 'shivratri' || slug.includes('shiv')) {
    return '/reader/aarti/shiv';
  }
  if (event?.type === 'sankashti' || slug.includes('ganesh')) {
    return '/reader/aarti/ganesh';
  }
  if (slug.includes('durga') || slug.includes('navratri') || slug.includes('teej')) {
    return '/reader/aarti/durga';
  }
  if (slug.includes('lakshmi') || slug.includes('diwali') || slug.includes('dhanteras')) {
    return '/reader/aarti/lakshmi';
  }
  if (slug.includes('krishna') || slug.includes('janmashtami') || slug.includes('holi') || slug.includes('govardhan')) {
    return '/reader/aarti/krishna';
  }
  if (slug.includes('ram') || slug.includes('dussehra')) {
    return '/reader/aarti/ram-aarti';
  }
  if (slug.includes('hanuman')) {
    return '/reader/aarti/hanuman-aarti';
  }
  if (slug.includes('santoshi')) {
    return '/reader/aarti/santoshi';
  }
  return '/reader/aarti/jagdish';
}

function kathaHref(event: VratEvent): string | undefined {
  if (event.relatedId?.startsWith('sundarkand')) {
    return '/sundarkand';
  }
  if (event.relatedKind && event.relatedId) {
    return `/reader/${event.relatedKind}/${event.relatedId}`;
  }
  return undefined;
}

export function kramForDate(date: string, events: VratEvent[]): { event?: VratEvent; steps: KramStep[] } {
  const primary = events.find(isUpvaas) ?? events[0];
  if (!primary) {
    return {
      steps: [
        {
          id: 'pranam',
          title: L('प्रणाम / संकल्प', 'Pranam / sankalp'),
          body: L(
            'आज विशेष व्रत नहीं। फिर भी नित्य नाम ही व्रत है। मन में बोलें — “हे राम, आज का दिन आपके नाम से।”',
            'No special vrat today. Daily naam is itself the vrat. Speak: “O Ram, this day is in Your name.”',
          ),
        },
        {
          id: 'path',
          title: L('नित्य पाठ', 'Nitya path'),
          body: L('हनुमान चालीसा या सुंदरकांड का थोड़ा अंश — जितना बने उतना।', 'Hanuman Chalisa or a little Sundarkand — as much as you can.'),
          href: '/reader/path/hanuman-chalisa',
        },
        {
          id: 'aarti',
          title: L('संध्या आरती', 'Evening aarti'),
          body: L('दीप जलाएँ। ॐ जय जगदीश हरे — कुलदेवता के सामने।', 'Light a lamp. Om Jai Jagdish Hare before the family deity.'),
          href: '/reader/aarti/jagdish',
        },
        {
          id: 'shanti',
          title: L('रात शांति', 'Night peace'),
          body: L('झूठ-क्रोध कम। सोते समय रामनाम।', 'Less anger and falsehood. Ram-naam at sleep.'),
        },
      ],
    };
  }

  const katha = kathaHref(primary);
  const steps: KramStep[] = [
    {
      id: 'sankalp',
      title: L('प्रातः संकल्प', 'Morning sankalp'),
      body: L(
        `स्नान, स्वच्छ वस्त्र। मुख से बोलें — “हे ${primary.deity.hi}, आज ${primary.title.hi} का व्रत सामर्थ्य अनुसार ग्रहण करता/करती हूँ।”`,
        `Bathe, wear clean clothes. Speak: “O ${primary.deity.en}, I keep ${primary.title.en} as I am able.”`,
      ),
      href: `/event/${primary.id}`,
    },
    {
      id: 'food',
      title: L('आहार नियम', 'Food rule'),
      body: primary.howTo,
      href: `/event/${primary.id}`,
    },
    {
      id: 'puja',
      title: L('पूजन / आरती', 'Puja / aarti'),
      body: L('दीप, पुष्प, इष्ट की आरती। विधि की पूरी पट्टी व्रत पृष्ठ पर है।', 'Lamp, flowers, aarti to the ishta. Full vidhi is on the vrat page.'),
      href: aartiFor(primary),
    },
  ];

  if (katha) {
    steps.push({
      id: 'katha',
      title: L('कथा / पाठ', 'Katha / path'),
      body: L('कथा अधूरी न छोड़ें। बीच में प्रसाद न उठाएँ।', 'Do not leave the katha unfinished. Do not take prasad mid-way.'),
      href: katha,
    });
  }

  steps.push(
    {
      id: 'evening',
      title: L('संध्या संयम', 'Evening restraint'),
      body: L('क्रोध, जुआ, निंदा, बासी अन्न नहीं। यदि जागरण हो तो रामनाम या शिवनाम।', 'No anger, gambling, slander or stale food. If you keep jagaran, use Ram-naam or Shiva-naam.'),
    },
    {
      id: 'parana',
      title: L('पारणा याद', 'Remember parana'),
      body: L(
        'व्रत अधूरा न रहे — पंचांग का पारणा काल देखें, या द्वादशी/चंद्रदर्शन/अगली सुबह कुल रीति से खोलें। परिवार की रीति नीचे लिखी हो तो वही मानें।',
        'Do not leave the vrat open — see parana kala, or break after Dwadashi / moon-sight / next morning per home custom. If a family note is saved, follow that.',
      ),
      href: `/event/${primary.id}`,
    },
  );

  return { event: primary, steps };
}
