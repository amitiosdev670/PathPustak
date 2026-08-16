import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Fonts, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';

type ParamparaBoxProps = {
  label: string;
  hint: string;
  value: string;
  onSave: (note: string) => void;
};

export function ParamparaBox({ label, hint, value, onSave }: ParamparaBoxProps) {
  const theme = useTheme();
  const { lang } = useLanguage();
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <View style={[styles.box, { borderColor: theme.goldLine, backgroundColor: theme.paper }]}>
      <ThemedText type="heading">{label}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {hint}
      </ThemedText>
      <TextInput
        value={text}
        onChangeText={setText}
        onBlur={() => onSave(text)}
        multiline
        textAlignVertical="top"
        placeholder={lang === 'hi' ? 'उदा. हमारे घर एकादशी पर आलू नहीं…' : 'e.g. In our house no potato on Ekadashi…'}
        placeholderTextColor={theme.textSecondary}
        style={[
          styles.input,
          {
            color: theme.text,
            borderColor: theme.goldLine,
            backgroundColor: theme.card,
            fontFamily: Fonts.devanagari,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  input: {
    minHeight: 88,
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.two,
    fontSize: 16,
    lineHeight: 24,
  },
});
