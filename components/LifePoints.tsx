import { StyleSheet, Text, View } from "react-native";
import { lifePoints } from "../atoms/atomLifePoints";
import { useAtomValue } from "jotai";

interface Props {
  playerNumber: 1 | 2;
}

export const LifePoints = ({ playerNumber }: Props) => {
  const bothPlayerLifePoints = useAtomValue(lifePoints);
  const currentLifePoints = bothPlayerLifePoints[`player${playerNumber}`];

  return (
    <View style={{ padding: 10 }}>
      <View style={styles.container}>
        <Text style={styles.lifePointsText}>{currentLifePoints}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  lifePointsText: {
    fontFamily: "Orbitron_700Bold",
    fontSize: 56,
    color: "#585214ff",
  },
});
