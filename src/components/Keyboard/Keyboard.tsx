import React from "react";
import { View } from "react-native";
import Button from "../Button";
import ButtonRow from "../ButtonRow";
import { ButtonsProperties } from "../../constants/constants";

const Keyboard: React.FC = () => {
  return (
    <View>
      {ButtonsProperties.map((row, index) => (
        <ButtonRow key={index} row={row} />
      ))}
      {/* <ButtonRow>
        <Button symbol="AC" color="#a4a4a4" onPress={() => {}} />
        <Button symbol="+/-" color="#a4a4a4" onPress={() => {}} />
        <Button symbol="%" color="#a4a4a4" onPress={() => {}} />
        <Button symbol="÷" color="#ff9a0a" onPress={() => {}} />
      </ButtonRow>
      <ButtonRow>
        <Button symbol="mc" color="#a4a4a4" onPress={() => {}} />
        <Button symbol="mr" color="#a4a4a4" onPress={() => {}} />
        <Button symbol="m-" color="#a4a4a4" onPress={() => {}} />
        <Button symbol="m+" color="#ff9a0a" onPress={() => {}} />
      </ButtonRow>
      <ButtonRow>
        <Button symbol="7" color="#333" onPress={() => {}} />
        <Button symbol="8" color="#333" onPress={() => {}} />
        <Button symbol="9" color="#333" onPress={() => {}} />
        <Button symbol="×" color="#ff9a0a" onPress={() => {}} />
      </ButtonRow>
      <ButtonRow>
        <Button symbol="4" color="#333" onPress={() => {}} />
        <Button symbol="5" color="#333" onPress={() => {}} />
        <Button symbol="6" color="#333" onPress={() => {}} />
        <Button symbol="-" color="#ff9a0a" onPress={() => {}} />
      </ButtonRow>
      <ButtonRow>
        <Button symbol="1" color="#333" onPress={() => {}} />
        <Button symbol="2" color="#333" onPress={() => {}} />
        <Button symbol="3" color="#333" onPress={() => {}} />
        <Button symbol="+" color="#ff9a0a" onPress={() => {}} />
      </ButtonRow>
      <ButtonRow>
        <Button symbol="0" color="#333" doubled onPress={() => {}} />
        <Button symbol="," color="#333" onPress={() => {}} />
        <Button symbol="=" color="#ff9a0a" onPress={() => {}} />
      </ButtonRow> */}
    </View>
  );
};

export default Keyboard;
