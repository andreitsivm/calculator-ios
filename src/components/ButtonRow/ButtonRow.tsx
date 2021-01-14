import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { AppContext } from "../../context/AppContext";
import { iButton } from "../../interfaces/interfases";
import Button from "../Button/Button";

interface Props {
  row: iButton[];
}

const ButtonRow: React.FC<Props> = ({ row }) => {
  const app = useContext(AppContext);
  return (
    <View style={styles.row}>
      {row.map(({ symbol, color, type, value, doubled }) => (
        <Button
          key={`button-${type}-${symbol}`}
          onPress={() => app.clickHandler(type, value)}
          symbol={symbol}
          type={type}
          value={value}
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
