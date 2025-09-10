import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { UtilButton } from "../UtilButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useResetAtom } from "jotai/utils";
import { lifePoints } from "../../atoms/atomLifePoints";
import { Popup } from "../Popup/Popup";
import { UtilRollDice } from "./UtilRollDice";

export const UtilBar = () => {
  const resetLifePoints = useResetAtom(lifePoints);
  const [showDicePopup, setShowDicePopup] = useState(false);

  const handleDicePress = () => {
    setShowDicePopup(true);
  };

  return (
    <>
      <View style={styles.container}>
        <UtilButton svg={<MaterialCommunityIcons name="hand-coin" size={22} color="black" />} />
        <UtilButton svg={<Ionicons name="dice" size={24} color="black" />} onPress={handleDicePress} />
        <UtilButton
          svg={<MaterialCommunityIcons name="restart" size={24} color="black" />}
          onPress={() => resetLifePoints()}
        />
      </View>

      <Popup visible={showDicePopup} onClose={() => setShowDicePopup(false)} title="Roll Dice">
        <UtilRollDice />
      </Popup>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "white",
  },
});
