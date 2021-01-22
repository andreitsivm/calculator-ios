import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useCalc } from "./src/hooks/useCalc.hook";
import Keyboard from "./src/components/Keyboard";
import { AppContext } from "./src/context/AppContext";
import { Values } from "./src/constants/constants";

const App: React.FC = () => {
  const { clickHandler, currentValue } = useCalc();
  return (
    <AppContext.Provider value={{ clickHandler }}>
      <View style={styles.container}>
        <StatusBar />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.displayContainer}>
            <Text style={styles.display}>
              {currentValue === Values.emptyString ? Values.zero : currentValue}
            </Text>
          </View>
          <View style={styles.keyboard}>
            <Keyboard />
          </View>
        </SafeAreaView>
      </View>
    </AppContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  safeArea: {
    flex: 1,
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
