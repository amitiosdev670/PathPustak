export type Lang = 'hi' | 'en';

export type LocaleText = {
  hi: string;
  en: string;
};

export type VerseLabel =
  | 'shloka'
  | 'chaupai'
  | 'doha'
  | 'sortha'
  | 'chhand'
  | 'mantra'
  | 'katha'
  | 'vidhi'
  | 'aarti';

export type Verse = LocaleText & {
  label?: VerseLabel;
};

export type ContentKind = 'aarti' | 'path' | 'katha';

export type ScriptureGroup = 'sundarkand' | 'stotra' | 'katha' | 'aarti' | 'mantra';

export type Scripture = {
  id: string;
  kind: ContentKind;
  group: ScriptureGroup;
  deity: LocaleText;
  title: LocaleText;
  summary: LocaleText;
  verses: Verse[];
  seriesId?: string;
  seriesIndex?: number;
  seriesTotal?: number;
};

export type VratType =
  | 'ekadashi'
  | 'pradosh'
  | 'sankashti'
  | 'festival'
  | 'purnima'
  | 'amavasya'
  | 'shivratri';

export type VratEvent = {
  id: string;
  date: string;
  type: VratType;
  title: LocaleText;
  deity: LocaleText;
  description: LocaleText;
  howTo: LocaleText;
  relatedKind?: ContentKind;
  relatedId?: string;
};
