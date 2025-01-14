import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";

const HotelList = ({ navigation }) => {
  const hotels =  [
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Seaside Resort",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/42/2d/a3/niko-seaside-resort-mgallery.jpg?w=700&h=-1&s=1",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Miami Beach, FL"
    },
    {
        "_id": "64c675183cfa5e847bcd5433",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Mountain Lodge",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQ1iMwodsoFH_hyDPQbpvpm6rnxudMfM4wA&s",
        "rating": 4.5,
        "review": "12024 Reviews",
        "location": "Aspen, CO"
    },
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hotel Alpha",
        "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/69/99/86/hotel-alpha.jpg?w=700&h=-1&s=1",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "City Center, USA"
    },
    {
        "_id": "64c675be3cfa5e847bcd5439",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Family-Friendly Resort",
        "imageUrl": "https://tinytravelship.com/wp-content/uploads/The-Peligoni-Club-Sundeck-26-scaled.jpg",
        "rating": 4.6,
        "review": "12854 Reviews",
        "location": "Orlando, FL"
    },
    {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Luxury Hotel 1",
        "imageUrl": "https://i.dugun.com/gallery/11215/preview_wellborn-hotel_EqpRfkuZ.JPG",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, NY"
    }
]
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
         top={10}
         left={0}
         right={0}
          title={"Nearby Hotels"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> navigation.navigate('HotelSearch')}
        />
      </View>

      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={hotels}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile
                item={item}
                onPress={() => navigation.navigate("HotelDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HotelList;
