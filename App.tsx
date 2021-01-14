import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useCalc } from "./src/components/hooks/useCalc.hook";
import Keyboard from "./src/components/Keyboard";
import { AppContext } from "./src/context/AppContext";

export default function App() {
  const { clickHandler, currentValue } = useCalc();
  return (
    <AppContext.Provider value={{ clickHandler }}>
      <View style={styles.container}>
        <StatusBar />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.displayContainer}>
            <Text style={styles.display}>
              {currentValue === "" ? "0" : currentValue}
            </Text>
          </View>
          <View></View>
          <Keyboard />
        </SafeAreaView>
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  displayContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  display: {
    color: "#fff",
    fontSize: 60,
    paddingHorizontal: 8,
  },
  keyboard: {
    flex: 8,
  },
});
