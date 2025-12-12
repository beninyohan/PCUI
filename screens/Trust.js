import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import I18n from '../i18n';

export default function Trust() {

  const trust = {
    name: "Pentecostal Church Union of India",
    regNo: "REG-XXXXXX",
    regDate: "YYYY-MM-DD",
    address: "Trust Office, Nava Chacharbunda, District, State - PIN",
    phone: "+91-XXXXXXXXXX",
    email: "office@pcui.org",
    founder: { name: "Founder Name", church: "Chacharbunda" },
    formationHistory: "Pentecostal Church Union of India ની સ્થાપના YYYY માં કરવામાં આવી હતી. સ્થાપના અને પ્રારંભિક કામગીરી વિશેની વિગતવાર માહિતી અહીં પ્રદર્શિત થશે."
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{I18n.t('trustDetails')}</Text>
        <Text style={styles.subtitle}>{I18n.t('appName')} - Nava Chacharbunda</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{I18n.t('registration_no')}</Text>
        <Text style={styles.text}>{trust.regNo}</Text>

        <Text style={styles.cardTitle}>{I18n.t('registered_date')}</Text>
        <Text style={styles.text}>{trust.regDate}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{I18n.t('address')}</Text>
        <Text style={styles.text}>{trust.address}</Text>
        <Text style={styles.text}>Phone: {trust.phone}</Text>
        <Text style={styles.text}>Email: {trust.email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{I18n.t('founder')}</Text>
        <Text style={styles.text}>{trust.founder.name} — {trust.founder.church}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{I18n.t('formationHistory')}</Text>
        <Text style={styles.text}>{trust.formationHistory}</Text>
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#071B2D' },
  header: { padding: 16, alignItems: 'center' },
  title: { color: '#D8B35A', fontSize: 18, fontWeight: '700' },
  subtitle: { color: '#fff', fontSize: 13, marginTop: 4 },
  card: { backgroundColor: '#0B3350', margin: 16, borderRadius: 12, padding: 16 },
  cardTitle: { color: '#D8B35A', fontWeight: '700', marginBottom: 6 },
  text: { color: '#fff', marginBottom: 6, lineHeight: 20 }
});
