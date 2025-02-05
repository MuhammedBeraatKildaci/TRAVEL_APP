import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reusable/reusable.style";
import styles from "./search.style";
import { Feather, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { AppBar, HeightSpacer } from "../../components";
import HotelCard from "../../components/Tiles/Hotels/HotelCard";

const HotelSearch = ({navigation}) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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
    <SafeAreaView >
      <View style={{height: 50}}>
      <AppBar
        top={10}
        left={20}
        right={20}
        title={'Look for hotels'}
        color={COLORS.white}
        icon={"filter"}
        color1={COLORS.white}
        onPress={() => navigation.goBack()}
        onPress1={() => {}}
      />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Where do you want to stay"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {hotels.length === 0 ? (
        <View>
          <HeightSpacer height={"20%"} />
          <Image
            source={require("../../assets/images/search.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
         <View style={{paddingLeft: 12}}>
           <FlatList
          data={hotels}
          keyExtractor={(item) => item._id}
          numColumns={2}
          ItemSeparatorComponent={()=> (<View style={{height: 16}}/>)}
          renderItem={({ item }) => (
            <HotelCard
              item={item}
              margin={10}
              onPress={() => navigation.navigate("HotelDetails", item._id)}
            />
          )}
        />
         </View>
      )}
    </SafeAreaView>
  );
};

export default HotelSearch;
