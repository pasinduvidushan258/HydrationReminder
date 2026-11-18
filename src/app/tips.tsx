import { StyleSheet, Text, View } from 'react-native';

export default function TipsTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why Hydrate? 🌊</Text>
      
      <Text style={styles.listItem}>Boosts skin health and beauty</Text>
      <Text style={styles.listItem}>Regulates body temperature</Text>
      <Text style={styles.listItem}>Flushes body waste</Text>
      <Text style={styles.listItem}>Maintains blood pressure</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Light background matching the UI
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0284c7', // Blue color for the title
    marginBottom: 30,
  },
  listItem: {
    fontSize: 18,
    color: '#333333',
    marginVertical: 10,
    textAlign: 'center',
  },
});