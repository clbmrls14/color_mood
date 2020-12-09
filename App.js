import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ColorPicker from './components/ColorPicker';
import Header from './components/Header';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ColorPicker />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#126782',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
