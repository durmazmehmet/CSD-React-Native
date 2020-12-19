import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View, Alert, Image} from 'react-native';

import {SimpleTextInput} from './SimpleTextInput.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text> LOGIN EKRANI </Text>
      <SimpleTextInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
