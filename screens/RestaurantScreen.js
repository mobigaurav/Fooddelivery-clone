import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { urlFor } from "../sanity";
import {
  ArrowLeftIcon,
  StarIcon,
  MapIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from '../components/BasketIcon';
import { setRestaurant } from "../features/restaurantSlice";

export default function RestaurantScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      })
    );
  }, [dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(dishes);
  return (
    <>
    <BasketIcon />
    <ScrollView>
      <View className="relative">
        <Image
          source={{
            uri: urlFor(imgUrl).url(),
          }}
          className="h-60 w-full bg-gray-300 p-4"
        />
        <TouchableOpacity
          className="absolute top-14 left-4 p-2 bg-white rounded-full"
          onPress={() => navigation.goBack()}
        >
          <ArrowLeftIcon size={24} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="font-bold text-2xl">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon size={22} color="green" opacity={0.5} />
            <Text className="text-xs text-gray-500">
              <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <MapIcon size={22} color="gray" opacity={0.4} />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
          </View>
          <Text className="text-gray-600 pt-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={24} opacity={0.6} color="#00CCBB" />
          <Text className="p-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon size={24} color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <View className="pb-36">
        <Text className="font-bold text-lg">Menu</Text>
          {dishes.map((dish) => (
           <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                short_description={dish.short_description}
                price={dish.price}
                image={dish.image}
            />
          ))}
        </View>
    </ScrollView>
    </>
  );
}
