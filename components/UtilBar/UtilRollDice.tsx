import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export const UtilRollDice = () => {
  const [diceValue, setDiceValue] = useState<number | null>(null);

  const rollDice = () => {
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(randomValue);
  };

  const getDiceIcon = (value: number) => {
    switch (value) {
      case 1:
        return "dice-one";
      case 2:
        return "dice-two";
      case 3:
        return "dice-three";
      case 4:
        return "dice-four";
      case 5:
        return "dice-five";
      case 6:
        return "dice-six";
      default:
        return "dice";
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.diceContainer} onPress={rollDice}>
        <FontAwesome5 name={diceValue ? getDiceIcon(diceValue) : "dice"} size={60} color="#333" />
      </TouchableOpacity>
      <Text style={styles.label}>{diceValue ? `Rolled: ${diceValue}` : "Tap to roll"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  diceContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});
