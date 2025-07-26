import { StyleSheet, Text, View } from "react-native";
import { lifePoints } from "../atoms/atomLifePoints";
import { useAtomValue } from "jotai";
import { Image } from "expo-image";
import { cardIds } from "../utils/cardIds";

interface Props {
  playerNumber: 1 | 2;
}

export const LifePoints = ({ playerNumber }: Props) => {
  const bothPlayerLifePoints = useAtomValue(lifePoints);
  const currentLifePoints = bothPlayerLifePoints[`player${playerNumber}`];

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={{ padding: 10 }}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          cachePolicy={"memory-disk"}
          source={`https://images.ygoprodeck.com/images/cards_cropped/${
            cardIds[Math.floor(Math.random() * cardIds.length)]
          }.jpg`}
          placeholder={{ blurhash }}
          transition={1000}
        />
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
    flexDirection: "row",
    gap: 24,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderColor: "#c0c0c0ff",
    borderWidth: 2,
    borderRadius: 8,
  },
  lifePointsText: {
    fontFamily: "Orbitron_700Bold",
    fontSize: 56,
    color: "#585214ff",
    width: "auto",
  },
  image: {
    width: 52,
    height: 52,
    borderColor: "#c0c0c0ff",
    borderWidth: 1,
    borderRadius: 8,
  },
});
