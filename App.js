// Prezado professor!
// Para deixar o Header no topo e o Footer na parte inferior, se fez necessário trocar a propriedade
// JustifyContent para "space-between", contrariando a orientação do enunciado da questão.
// Também foi necessário ampliar o "width" dos componentes para que pudessem ocupar toda a largura
// da tela.

import React from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar'
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar style='light'/>
        <Header title="Infinity School" />
        <Footer info="By Leonardo Copello - 2022" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#464646",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
