import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';

export function LangToggle() {
  const { lang, setLang } = useLanguage();
  const theme = useTheme();

  return (
    <View style={[styles.wrap, { backgroundColor: theme.backgroundElement }]}>
      {(['hi', 'en'] as const).map((code) => {
        const active = lang === code;
        return (
          <Pressable
            key={code}
            onPress={() => setLang(code)}
            style={[styles.chip, active && { backgroundColor: theme.saffron }]}>
            <ThemedText type="smallBold" style={active ? styles.activeText : undefined} themeColor={active ? 'text' : 'textSecondary'}>
              {code === 'hi' ? 'हिं' : 'EN'}
            </ThemedText>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    borderRadius: 999,
    padding: 2,
  },
  chip: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
    borderRadius: 999,
  },
  activeText: {
    color: '#fff',
  },
});
