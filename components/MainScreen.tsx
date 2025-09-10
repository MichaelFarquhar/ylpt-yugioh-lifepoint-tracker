import { View, StyleSheet } from "react-native";
import { LifePoints } from "./LifePoints/LifePoints";
import { UtilBar } from "./UtilBar/UtilBar";

export const MainScreen = () => {
  return (
    <View style={styles.container}>
      <LifePoints playerNumber={1} />
      <UtilBar />
      <LifePoints playerNumber={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
