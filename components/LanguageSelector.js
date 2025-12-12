import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import I18n, { setLanguage } from '../i18n';

const langs = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिंदी' },
  { code: 'mr', label: 'मराठी' },
  { code: 'gu', label: 'ગુજરાતી' }
];

export default function LanguageSelector() {
  return (
    <View style={styles.container}>
      {langs.map(l => (
        <TouchableOpacity
          key={l.code}
          style={styles.btn}
          onPress={() => setLanguage(l.code)}
        >
          <Text style={styles.txt}>{l.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6
  },
  txt: {
    color: '#D8B35A',
    fontWeight: '600'
  }
});
