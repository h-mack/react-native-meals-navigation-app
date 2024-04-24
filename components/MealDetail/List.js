import { Text, View, StyleSheet } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#123456",
  },
  itemText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
