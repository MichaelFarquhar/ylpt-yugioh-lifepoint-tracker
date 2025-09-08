import { View, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  action: () => void;
  icon: React.ReactNode;
}

export const LifePointsButton = ({ action, icon }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={action}>
        {icon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    padding: 6,
    borderColor: "#c0c0c0ff",
    borderWidth: 2,
    borderRadius: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
