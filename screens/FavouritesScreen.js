import { StyleSheet, View, Text } from "react-native";

export default function FavouritesScreen() {
  return (
    <View>
      <Text style={styles.text}>Favourites Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});
