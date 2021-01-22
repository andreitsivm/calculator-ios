import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonRow from "../ButtonRow";
import { ButtonsProperties } from "../../constants/buttons";

const Keyboard: React.FC = () => {
  return (
    <View style={styles.wrap}>
      {ButtonsProperties.map((row, index) => (
        <ButtonRow key={index} row={row} />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
});
export default Keyboard;
