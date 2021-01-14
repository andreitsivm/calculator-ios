import React from "react";
import { View } from "react-native";
import ButtonRow from "../ButtonRow";
import { ButtonsProperties } from "../../constants/buttons";

const Keyboard: React.FC = () => {
  return (
    <View>
      {ButtonsProperties.map((row, index) => (
        <ButtonRow key={index} row={row} />
      ))}
    </View>
  );
};

export default Keyboard;
