import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { AppContext } from "../../context/AppContext";
import { iButton } from "../../interfaces/interfaces";
import Button from "../Button/Button";

interface Props {
  row: iButton[];
}

const ButtonRow: React.FC<Props> = ({ row }) => {
  const { clickHandler } = useContext(AppContext);
  return (
    <View style={styles.row}>
      {row.map(({ symbol, color, type, value, doubled }) => (
        <Button
          key={`button-${type}-${symbol}`}
          onPress={() => clickHandler(type, value)}
          symbol={symbol}
          value={value}
          type={type}
          doubled={doubled}
          color={color}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default ButtonRow;
