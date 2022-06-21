import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import { Container } from './styles';

export default function Footer({ info }) {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>{info}</Text>
  </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "tomato",
        width: '100%'
      },
      text: {
        fontSize: 12,
        color: "#FFFFFF",
        textAlign: 'center',
        paddingVertical: 16,
      },
})