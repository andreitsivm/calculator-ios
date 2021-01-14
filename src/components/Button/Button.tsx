import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

interface Props {
  value: string;
  title?: string;
  onPress: (value: string) => void;
  size?: number;
  color?: string;
}

const Button: React.FC<Props> = ({ value, title, onPress, size, color }) => {
  const scale = size ? size : 1;
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color ? color : "#333",
      width: Dimensions.get("screen").width * 0.2 * scale,
      height: Dimensions.get("screen").width * 0.2,
      borderRadius: Dimensions.get("screen").width * 0.1,
      justifyContent: "center",
      alignItems: size ? "flex-start" : "center",
      margin: 8,
    },
    symbol: {
      color: "#fff",
      fontSize: 24,
      paddingLeft: value === "0" ? 25 : 0,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.symbol}>{title ? title : value}</Text>
    </TouchableOpacity>
  );
};

export default Button;
