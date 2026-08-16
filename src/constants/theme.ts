import { Platform } from 'react-native';

import '@/global.css';

export const Colors = {
  light: {
    text: '#3A1E12',
    background: '#F4ECD9',
    backgroundElement: '#EADCC4',
    backgroundSelected: '#DFCBAE',
    textSecondary: '#7A4A2E',
    saffron: '#C45C26',
    maroon: '#6B1A1A',
    gold: '#B8942A',
    card: '#FBF6EB',
    goldLine: '#C9A24A',
    paper: '#F8F1E0',
    diya: '#E07A2F',
  },
  dark: {
    text: '#F6E7D4',
    background: '#0E0906',
    backgroundElement: '#1A100B',
    backgroundSelected: '#2A1A10',
    textSecondary: '#D4B48A',
    saffron: '#E8A05A',
    maroon: '#E0C56A',
    gold: '#E0C56A',
    card: '#16100A',
    goldLine: '#8A6A2A',
    paper: '#120C08',
    diya: '#F0A04A',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: 'system-ui',
    serif: 'ui-serif',
    rounded: 'ui-rounded',
    mono: 'ui-monospace',
    devanagari: 'NotoSansDevanagari_400Regular',
    devanagariBold: 'NotoSansDevanagari_700Bold',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
    devanagari: 'NotoSansDevanagari_400Regular',
    devanagariBold: 'NotoSansDevanagari_700Bold',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
    devanagari: 'NotoSansDevanagari_400Regular',
    devanagariBold: 'NotoSansDevanagari_700Bold',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;

export const VratTypeColors: Record<string, string> = {
  ekadashi: '#3D5A80',
  pradosh: '#6B1A1A',
  sankashti: '#C45C26',
  festival: '#B8942A',
  purnima: '#5C6B2F',
  amavasya: '#4A4A4A',
  shivratri: '#5B3A8C',
};

export const VerseLabelHi: Record<string, string> = {
  shloka: 'श्लोक',
  chaupai: 'चौपाई',
  doha: 'दोहा',
  sortha: 'सोरठा',
  chhand: 'छन्द',
  mantra: 'मंत्र',
  katha: 'कथा',
  vidhi: 'विधि',
  aarti: 'आरती',
};

export const VerseLabelEn: Record<string, string> = {
  shloka: 'Shloka',
  chaupai: 'Chaupai',
  doha: 'Doha',
  sortha: 'Sortha',
  chhand: 'Chhand',
  mantra: 'Mantra',
  katha: 'Katha',
  vidhi: 'Vidhi',
  aarti: 'Aarti',
};
