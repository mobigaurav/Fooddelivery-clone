import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
const items = useSelector(selectBasketItems);
const navigation = useNavigation();
const basketTotal = useSelector(selectBasketTotal);
if(items.length === 0) return null;

console.log(basketTotal);
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity 
      onPress={() => navigation.navigate("Basket")}
      className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row
      items-center space-x-1">
          <Text className="text-white font-extrabold text-lg bg-[#00CCBB] py-1 px-2">{items.length}</Text>
          <Text className="flex-1 font-extrabold text-lg text-center text-white">View Basket</Text>
          <Text className="text-lg text-white font-extrabold">
            <Currency currency="USD" quantity={basketTotal} />
          </Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon;