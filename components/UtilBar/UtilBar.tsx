import { StyleSheet, View } from "react-native";
import { UtilButton } from "../UtilButton";
import SvgCoinIcon from "../../svgs/SvgCoinIcon";
import SvgDiceIcon from "../../svgs/SvgDiceIcon";
import SvgResetIcon from "../../svgs/SvgResetIcon";
import { useResetAtom } from "jotai/utils";
import { lifePoints } from "../../atoms/atomLifePoints";

export const UtilBar = () => {
  const resetLifePoints = useResetAtom(lifePoints);
  return (
    <View style={styles.container}>
      <UtilButton svg={<SvgCoinIcon />} />
      <UtilButton svg={<SvgDiceIcon />} />
      <UtilButton svg={<SvgResetIcon />} onPress={() => resetLifePoints()} />
    </View>
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
