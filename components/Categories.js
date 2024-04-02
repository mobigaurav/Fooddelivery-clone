import React, {useState, useEffect} from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";
import client from "../sanity";
import { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
   client.fetch(`
   *[_type == "category"]{ 
    ..., 
   }`).then((categories) => {
      //console.log("category of images", categories)
      setCategories(categories)
    })
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories.map((category) => {

          return <CategoryCard
          id={category._id}
          imgUrl={category.image}
          title={category.name}
        />
        })
      }
    </ScrollView>
  );
};
export default Categories;
