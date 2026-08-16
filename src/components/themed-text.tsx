import { Platform, StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, type ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?:
    | 'default'
    | 'title'
    | 'heading'
    | 'display'
    | 'small'
    | 'smallBold'
    | 'subtitle'
    | 'link'
    | 'linkPrimary'
    | 'code'
    | 'verse'
    | 'meaning'
    | 'band';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? 'text'], fontFamily: Fonts.devanagari },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'heading' && styles.heading,
        type === 'display' && styles.display,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'linkPrimary' && styles.linkPrimary,
        type === 'code' && styles.code,
        type === 'verse' && styles.verse,
        type === 'meaning' && styles.meaning,
        type === 'band' && styles.band,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500,
  },
  smallBold: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.devanagariBold,
    fontWeight: 700,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500,
  },
  heading: {
    fontSize: 22,
    lineHeight: 30,
    fontFamily: Fonts.devanagariBold,
    fontWeight: 700,
  },
  display: {
    fontSize: 28,
    lineHeight: 36,
    fontFamily: Fonts.devanagariBold,
    fontWeight: 700,
  },
  title: {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 52,
    fontFamily: Fonts.devanagariBold,
  },
  subtitle: {
    fontSize: 32,
    lineHeight: 44,
    fontWeight: 600,
    fontFamily: Fonts.devanagariBold,
  },
  link: {
    lineHeight: 30,
    fontSize: 14,
  },
  linkPrimary: {
    lineHeight: 30,
    fontSize: 14,
    color: '#C45C26',
  },
  code: {
    fontFamily: Fonts.mono,
    fontWeight: Platform.select({ android: 700 }) ?? 500,
    fontSize: 12,
  },
  verse: {
    fontSize: 21,
    lineHeight: 36,
    fontWeight: 400,
  },
  meaning: {
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 400,
  },
  band: {
    fontSize: 15,
    lineHeight: 22,
    fontFamily: Fonts.devanagariBold,
    fontWeight: 700,
  },
});
