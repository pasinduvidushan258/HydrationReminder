import { StyleSheet, Text, View } from 'react-native';

export default function AboutTab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About This App</Text>
      
      <Text style={styles.description}>
        Built for Mobile Application Development{'\n'}
        Lab 6. Demonstrates local notifications{'\n'}
        and Expo Router tab navigation.
      </Text>
      
      <Text style={styles.footer}>
        Developed with React Native and Expo.{'\n'}
        Created by Pasindu Vidushan.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555555',
    marginBottom: 30,
    lineHeight: 24,
  },
  footer: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555555',
    lineHeight: 24,
  }
});