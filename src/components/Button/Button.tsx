import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

interface Props {
  symbol: string;
  type: string;
  value?: string;
  onPress: () => void;
  doubled?: boolean;
  color: string;
}

const width = Dimensions.get("window").width * 0.25;

const Button: React.FC<Props> = ({ symbol, color, onPress, doubled }) => {
  const colorStyle = StyleSheet.create({
    color: {
      backgroundColor: color,
    },
  });
  const buttonStyles = [
    styles.button,
    doubled && styles.double,
    colorStyle.color,
  ];
  const textStyles = [styles.text, doubled && styles.doubleText];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress}>
      <Text style={textStyles}>{symbol}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: width - 10,
    borderRadius: width,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  double: {
    width: width * 0.5 - 10,
    flex: 2,
    alignItems: "flex-start",
  },
  doubleText: {
    paddingLeft: 40,
  },
});
export default Button;
