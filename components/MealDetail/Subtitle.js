import { Text, StyleSheet } from "react-native";

export default function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#9cd6d7",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    marginHorizontal: 16,
    padding: 6,
    textAlign: "center",
    borderBottomColor: "#9cd6d7",
    borderBottomWidth: 2,
  },
});
