import { StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  svg: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

export const UtilButton = ({ svg, onPress, disabled = false }: Props) => {
  return (
    <TouchableOpacity style={styles.utilButton} onPress={onPress} disabled={disabled}>
      {svg}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  utilButton: {
    width: 100,
    height: 50,
    backgroundColor: "#c0c0c0",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});
