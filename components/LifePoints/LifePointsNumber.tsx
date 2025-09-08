import { StyleSheet, Text } from "react-native";
import { lifePoints } from "../../atoms/atomLifePoints";
import { useAtomValue } from "jotai";

interface Props {
  playerNumber: 1 | 2;
}

export const LifePointsNumber = ({ playerNumber }: Props) => {
  const bothPlayerLifePoints = useAtomValue(lifePoints);
  const currentLifePoints = bothPlayerLifePoints[`player${playerNumber}`];

  return <Text style={styles.lifePointsText}>{currentLifePoints}</Text>;
};

const styles = StyleSheet.create({
  lifePointsText: {
    fontFamily: "Orbitron_700Bold",
    fontSize: 56,
    color: "#585214ff",
    width: "auto",
  },
});
