import { View, Text, ScrollView } from "react-native";
import React, {useState, useEffect } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import client from "../sanity";

const FeaturedRow = ({ id, title, description }) => {
  const [restaurant , setRestaurant] = useState([])
  console.log(id);
  useEffect(() => {
  client
    .fetch(
  `
    *[_type=="featured" && _id == $id] {
    ...,
    restaurants[]-> {
    ...,
    dishes[]->,
    type-> {
      name
    }
  }
}[0]
  `, 
    { id }
    )
    .then((data) => {
      setRestaurant(data?.restaurants)
      });
  }, []);
  //console.log('Restaurant is', restaurant);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB" />
      </View>

      <Text className="text-sm text-gray-500 px-4">{description}</Text>
      <ScrollView
        className="flex-row space-x-2 mt-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {restaurant?.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type?.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};
export default FeaturedRow;
