import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { iButton } from "../../interfaces/interfases";
import Button from "../Button";

interface Props {
  rowItems: iButton[];
  onPress: (value: string) => void;
}

const ButtonRow: React.FC<Props> = ({ rowItems, onPress }) => {
  return (
    <View style={styles.row}>
      {rowItems.map(({ value, title, size, color }) => (
        <Button
          key={`button-${value}`}
          color={color}
          onPress={onPress}
          size={size}
          value={value}
          title={title}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    height: 50,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ButtonRow;
