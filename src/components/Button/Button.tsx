import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../constants/constants";

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
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: color },
        doubled ? styles.double : null,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, doubled ? { paddingLeft: 40 } : null]}>
        {symbol}
      </Text>
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
});
export default Button;
