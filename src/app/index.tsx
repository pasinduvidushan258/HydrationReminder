import * as Notifications from 'expo-notifications';
import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ReminderTab() {
  const [isReminding, setIsReminding] = useState(false);
  const [message, setMessage] = useState("Time to drink a glass of water!");
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  // Request notification permissions on mount
  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water!'
        );
      }
    }
    requestPermissions();
  }, []);

  // Schedule a notification
  async function scheduleReminder() {
    await Notifications.requestPermissionsAsync(); // Safe check just in case
    
    // Clear old ones first so they don't stack up
    await Notifications.cancelAllScheduledNotificationsAsync();
    
    // Schedule the new notification
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hydration Alert 💧", 
        body: message, 
        sound: true, 
      },
      // Trigger the notification after the specified interval
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: intervalMinutes * 60, // Convert minutes to seconds
        repeats: true
      }
    });

    // Update state and alert the user
    setIsReminding(true);
    Alert.alert("Set!", `Reminding you every ${intervalMinutes} minutes.`); 
  }

  // Stop reminders
  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert("Stopped", "Reminders cancelled.");
  }

  // Render the UI
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>

      <Text style={styles.label}>Add a Custom Message</Text>
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
      />

      <Text style={styles.label}>Set Interval (minutes)</Text>
      <TextInput
        style={styles.input}
        value={intervalMinutes.toString()}
        onChangeText={(text) => setIntervalMinutes(parseInt(text) || 1)} 
        keyboardType="numeric"
      />

      <Text style={styles.status}>
        Status: {isReminding ? "Active 🟢" : "Inactive 🔴"}
      </Text>

      <Button title="START REMINDERS" onPress={scheduleReminder} color="#0EA5E9" />
      <View style={{ height: 10 }} />
      <Button title="STOP REMINDERS" onPress={stopReminder} color="#EF4444" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#E0F2FE',
  },
  emoji: {
    fontSize: 80,
    marginBottom: 20,
    marginTop: 40,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F766E',
    marginTop: 15,
    alignSelf: 'flex-start',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    backgroundColor: '#ffffff',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    borderRadius: 8,
  },
  status: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F766E',
    marginVertical: 20,
  }
});