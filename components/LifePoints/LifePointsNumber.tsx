import { StyleSheet, Text } from "react-native";
import { formattedLifePoints } from "../../atoms/atomLifePoints";
import { useAtomValue } from "jotai";

interface Props {
  playerNumber: 1 | 2;
}

export const LifePointsNumber = ({ playerNumber }: Props) => {
  const [player1Points, player2Points] = useAtomValue(formattedLifePoints);
  const currentLifePoints = playerNumber === 1 ? player1Points : player2Points;

  return <Text style={styles.lifePointsText}>{currentLifePoints}</Text>;
};

const styles = StyleSheet.create({
  lifePointsText: {
    fontFamily: "Orbitron_700Bold",
    fontSize: 56,
    color: "#585214ff",
    width: 200, // Fixed width to accommodate 5 digits
    textAlign: "center",
  },
});
