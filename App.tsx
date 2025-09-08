import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  useFonts,
  Orbitron_400Regular,
  Orbitron_500Medium,
  Orbitron_700Bold,
  Orbitron_900Black,
} from "@expo-google-fonts/orbitron";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { LifePoints } from "./components/LifePoints/LifePoints";
import { UtilBar } from "./components/UtilBar/UtilBar";
import Popup from "./components/Popup/Popup";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [diceResult, setDiceResult] = useState(0);

  let [fontsLoaded, fontError] = useFonts({
    Orbitron_400Regular,
    Orbitron_500Medium,
    Orbitron_700Bold,
    Orbitron_900Black,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDiceResult(result);
    setShowPopup(true);
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
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

      <StatusBar style="auto" />
    </View>
  );
}

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
