import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import I18n from '../i18n';
import LanguageSelector from '../components/LanguageSelector';

export default function Home({ navigation }) {
  const dailyVerse = {
    text: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1"
  };

  const events = [
    { id: 'e1', title: 'Trust Meeting - Nava Chacharbunda', date: '2025-12-13' },
    { id: 'e2', title: 'Fasting Prayer', date: '2025-12-20' }
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>{I18n.t('appName')}</Text>
        <Text style={styles.subtitle}>Nava Chacharbunda</Text>
      </View>

      <LanguageSelector />

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{I18n.t('dailyVerse')}</Text>
        <Text style={styles.verse}>"{dailyVerse.text}"</Text>
        <Text style={styles.ref}>{dailyVerse.reference}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{I18n.t('quickActions')}</Text>
        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Trust')}>
            <Text style={styles.buttonText}>{I18n.t('trustDetails')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{I18n.t('events')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{I18n.t('gallery')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{I18n.t('events')}</Text>
        {events.map(ev => (
          <View key={ev.id} style={styles.eventItem}>
            <Text style={styles.eventTitle}>{ev.title}</Text>
            <Text style={styles.eventDate}>{ev.date}</Text>
          </View>
        ))}
      </View>

      <View style={{height: 40}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#071B2D' },
  header: { padding: 20, alignItems: 'center' },
  logo: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  title: { color: '#D8B35A', fontSize: 18, fontWeight: '700' },
  subtitle: { color: '#fff', fontSize: 14 },
  card: { backgroundColor: '#0B3350', margin: 16, borderRadius: 12, padding: 16 },
  cardTitle: { color: '#D8B35A', fontWeight: '700', marginBottom: 8 },
  verse: { color: '#fff', fontSize: 16, marginBottom: 6 },
  ref: { color: '#ccc', fontSize: 12 },
  section: { marginHorizontal: 16, marginTop: 8 },
  sectionTitle: { color: '#D8B35A', fontWeight: '700', marginBottom: 8 },
  buttonsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { backgroundColor: '#123955', padding: 12, borderRadius: 8, flex: 1, marginHorizontal: 4, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 12 },
  eventItem: { backgroundColor: '#072B40', padding: 10, borderRadius: 8, marginBottom: 8 },
  eventTitle: { color: '#fff' },
  eventDate: { color: '#ccc', fontSize: 12 }
});
