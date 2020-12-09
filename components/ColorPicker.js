import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TodayColors from './TodayColors';

export default function ColorPicker() {
  const [happy, setHappy] = useState('#fff');
  const [sad, setSad] = useState('#fff');
  const [angry, setAngry] = useState('#fff');
  const [anxious, setAnxious] = useState('#fff');

  const happy1 = "#FFB703";
  const happy2 = "#FD9E02";
  const happy3 = "#FB8500";

  const sad1 = "#8ECAE6";
  const sad2 = "#58B4D1";
  const sad3 = "#219EBC";

  const anger1 = "#E97284";
  const anger2 = "#E03E56";
  const anger3 = "#D1233E";

  const anxious1 = "#A6DDBA";
  const anxious2 = "#7CCB9F";
  const anxious3 = "#429E73";

  buttonStyle = (color) => {
    return {
        width: 50,
        height: 30,
        backgroundColor: color,
        borderRadius: 5,
        margin: 3
    }
  }

  return (
    <View style={styles.container}>
        <TodayColors happiness={happy} sadness={sad} anger={angry} anxiety={anxious} />
        <View style={{height: 30}}/>
      <View style={styles.moodrow}>
        <Text style={ styles.text }>Happy: </Text>
        <TouchableOpacity
          style={ buttonStyle(happy1) }
          onPress={() => setHappy(happy1)}
        />
        <TouchableOpacity
          style={ buttonStyle(happy2) }
          onPress={() => setHappy(happy2)}
        />
        <TouchableOpacity
          style={ buttonStyle(happy3) }
          onPress={() => setHappy(happy3)}
        />
      </View>
      <View style={styles.moodrow}>
        <Text style={ styles.text }>Sad: </Text>
        <TouchableOpacity
          style={ buttonStyle(sad1) }
          onPress={() => setSad(sad1)}
        />
        <TouchableOpacity
          style={ buttonStyle(sad2) }
          onPress={() => setSad(sad2)}
        />
        <TouchableOpacity
          style={ buttonStyle(sad3) }
          onPress={() => setSad(sad3)}
        />
      </View>
      <View style={styles.moodrow}>
        <Text style={ styles.text }>Angry: </Text>
        <TouchableOpacity
          style={ buttonStyle(anger1) }
          onPress={() => setAngry(anger1)}
        />
        <TouchableOpacity
          style={ buttonStyle(anger2) }
          onPress={() => setAngry(anger2)}
        />
        <TouchableOpacity
          style={ buttonStyle(anger3) }
          onPress={() => setAngry(anger3)}
        />
      </View>
      <View style={styles.moodrow}>
        <Text style={ styles.text }>Anxious: </Text>
        <TouchableOpacity
          style={ buttonStyle(anxious1) }
          onPress={() => setAnxious(anxious1)}
        />
        <TouchableOpacity
          style={ buttonStyle(anxious2) }
          onPress={() => setAnxious(anxious2)}
        />
        <TouchableOpacity
          style={ buttonStyle(anxious3) }
          onPress={() => setAnxious(anxious3)}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: '#fff',
    backgroundColor: '#126782',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  text: {
    width: 85,
    color: '#fff',
    fontSize: 20
  },
  
});
