import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";
// import { useContext } from "react";
// import { FavouritesContext } from "../store/context/favourites-context";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy-data";

export default function FavouritesScreen() {
  // const favouriteMealsContext = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) => {
    return favouriteMealIds.includes(meal.id);
  });

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have not favourited any meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favouriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
