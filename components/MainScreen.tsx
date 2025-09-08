import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { LifePoints } from "./LifePoints/LifePoints";
import { UtilBar } from "./UtilBar/UtilBar";
import { Popup } from "./Popup/Popup";
import { useState } from "react";

export const MainScreen = () => {
  const [diceResult, setDiceResult] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
    setShowPopup(true);
  };

  return (
    <>
      <LifePoints playerNumber={1} />
      <UtilBar />
      <LifePoints playerNumber={2} />

      {/* Example popup trigger button */}
      <TouchableOpacity style={styles.diceButton} onPress={rollDice}>
        <Text style={styles.diceButtonText}>Roll Dice</Text>
      </TouchableOpacity>

      <Popup visible={showPopup} onClose={() => setShowPopup(false)} title="Dice Result">
        <View style={styles.popupContent}>
          <Text style={styles.diceNumber}>{diceResult}</Text>
          <Text style={styles.diceLabel}>You rolled a {diceResult}!</Text>
        </View>
      </Popup>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  diceButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
  },
  diceButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  popupContent: {
    alignItems: "center",
  },
  diceNumber: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 10,
  },
  diceLabel: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
});
