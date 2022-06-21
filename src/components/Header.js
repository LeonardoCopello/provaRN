import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: "navy",
    alignItems: "center",
    width: '100%'
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
