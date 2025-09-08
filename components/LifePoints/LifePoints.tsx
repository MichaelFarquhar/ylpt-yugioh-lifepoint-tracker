import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { cardIds } from "../../utils/cardIds";
import { LifePointsNumber } from "./LifePointsNumber";
import { LifePointsButton } from "./LifePointsButton";
import Feather from "@expo/vector-icons/Feather";
import { useAtom } from "jotai";
import { formattedLifePoints, lifePoints } from "../../atoms/atomLifePoints";

interface Props {
  playerNumber: 1 | 2;
}

const imageSource = `https://images.ygoprodeck.com/images/cards_cropped/${
  cardIds[Math.floor(Math.random() * cardIds.length)]
}.jpg`;

export const LifePoints = ({ playerNumber }: Props) => {
  const [bothPlayerLifePoints, setBothPlayerLifePoints] = useAtom(lifePoints);

  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          cachePolicy={"memory-disk"}
          source={imageSource}
          placeholder={{ blurhash }}
          transition={1000}
        />
        <LifePointsNumber playerNumber={playerNumber} />
      </View>
      <View style={styles.buttonContainer}>
        <LifePointsButton
          action={() => {}}
          icon={<Feather name="minus" size={20} color="black" />}
        />
        <LifePointsButton
          action={() =>
            setBothPlayerLifePoints((state) => {
              const [player1, player2] = state;
              if (playerNumber === 1) {
                return [Math.floor(player1 / 2), player2];
              } else {
                return [player1, Math.floor(player2 / 2)];
              }
            })
          }
          icon={<Feather name="divide" size={20} color="black" />}
        />
        <LifePointsButton
          action={() => {}}
          icon={<Feather name="plus" size={20} color="black" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    padding: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderColor: "#c0c0c0ff",
    borderWidth: 2,
    borderRadius: 8,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 24,
  },
  image: {
    width: 52,
    height: 52,
    borderColor: "#c0c0c0ff",
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 24,
    marginTop: 10,
  },
});
