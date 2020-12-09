import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TodayColors(props) {
    const [happy, setHappy] = useState('#fff');
    const [sad, setSad] = useState('#fff');
    const [angry, setAngry] = useState('#fff');
    const [anxious, setAnxious] = useState('#fff');

    useEffect(() => {
        setHappy(props.happiness);
        setSad(props.sadness);
        setAngry(props.anger);
        setAnxious(props.anxiety);
    });

    grabColor = (color) => {
        return {
            width: 85,
            backgroundColor: color,
            height: 30,
            borderRadius: 5,
            margin: 5
        }
    }

    return (
        <View>
            <Text style={[styles.row, {color: '#fff', fontSize: 24, textAlign: 'center'}]}>Today's Colors:</Text>
            <View style={styles.row}>
                <Text style={[styles.text, {textAlign: 'center'}]}>Happy</Text>
                <Text style={[styles.text, {textAlign: 'center'}]}>Sad</Text>
                <Text style={[styles.text, {textAlign: 'center'}]}>Anger</Text>
                <Text style={[styles.text, {textAlign: 'center'}]}>Anxious</Text>
            </View>
            <View  style={styles.row}>
                <View style={grabColor(happy)} />
                <View style={grabColor(sad)} />
                <View style={grabColor(angry)} />
                <View style={grabColor(anxious)}><Text></Text></View> 
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },
    text: {
        width: 85,
        color: '#fff',
        fontSize: 20
    }
});