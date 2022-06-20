import { View, Text } from 'react-native'
import React from 'react'

export default function RestaurantItem() {
  return (
    <View>
      {RestaurantImage}
      {/*RestraurantInfo*/}
    </View>
  );
}

const RestaurantImage = () => (
    <Image 
        source={{
            uri: "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg"
        }} 
        style={{ width: '100%', height: 180 }}
    />
)