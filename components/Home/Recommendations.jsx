import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReusableTile from "../Reusable/ReusableTile";

const Recommendations = () => {
  const navigation = useNavigation();

  const recommendations =  [
    {
        "_id": "64c631650298a05640539adc",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Walt Disney World",
        "location": "U.S.A New York ",
        "imageUrl": "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/orlandofl-redesign/4899_Disney2023LandingPage_2024_40268216-ecff-4596-b011-a889255e75d2.jpg",
        "rating": 4.7,
        "review": "1204 Reviews"
    },
    {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Statue of Liberty",
        "location": "U.S.A New York ",
        "imageUrl": "https://cdn.britannica.com/31/94231-050-C6B60B89/Statue-of-Liberty-Island-Upper-New-York.jpg",
        "rating": 4.8,
        "review": "1452 Reviews"
    },
    {
        "_id": "64d09e3f364e1c37c8b4b13c",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Golden Gate Bridge",
        "location": "U.S.A New York ",
        "imageUrl": "https://cdn.britannica.com/95/94195-050-FCBF777E/Golden-Gate-Bridge-San-Francisco.jpg",
        "rating": 4.6,
        "review": "2145 Reviews"
    },
    {
        "_id": "64d09f90364e1c37c8b4b140",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Yellowstone National Park",
        "location": "U.S.A New York ",
        "imageUrl": "https://www.destinationparks.com/images/park/yellowstone-national-park-1280x853.jpg",
        "rating": 4.8,
        "review": "24455 Reviews"
    }
];

  

  return (
    <View style={styles.container}>
      <View
        style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text={"Recommendations"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

    <FlatList 
    data={recommendations}
    horizontal
    keyExtractor={(item)=> item._id}
    contentContainerStyle={{columnGap: SIZES.medium}}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => (
        <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
    )}
    />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
