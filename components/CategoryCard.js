import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { urlFor } from '../sanity';

const CategoryCard = ({ id, imgUrl, title }) => {
  console.log("inside category card", title, imgUrl, id)
  return (
    <TouchableOpacity className="relative mr-2">
      <Image 
        source={{ 
          uri: urlFor(imgUrl).url() ,
        }} 
        className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
