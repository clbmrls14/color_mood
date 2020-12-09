import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View>
            <Text style={ styles.text }>Mood Colors</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 36,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 80
    }
});