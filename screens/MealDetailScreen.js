import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";
// import { FavouritesContext } from "../store/context/favourites-context";

import { MEALS } from "../data/dummy-data";

import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  // const favouriteMealsContext = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavourite = favouriteMealIds.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      // favouriteMealsContext.removeFavourite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favouriteMealsContext.addFavourite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavouriteStatusHandler}
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  const { height, width } = useWindowDimensions();
  const scrollContainerBottomPadding = height / 2;

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: scrollContainerBottomPadding }}
    >
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle children={"Ingredients"} />
          <List data={selectedMeal.ingredients} />
          <Subtitle children={"Steps"} />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
