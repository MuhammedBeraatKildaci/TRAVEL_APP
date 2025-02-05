import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  NetworkImage,
  AppBar,
  HeightSpacer,
  ReusableText,
  DescriptionText,
  ReusableBtn,
  PopularList,
} from "../../components/index";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';

const PlaceDetails = ({navigation}) => {
    const route = useRoute();
    const id = route.params
    const place = {
      "_id": "64d062a3de20d7c932f1f70a",
      "country_id": "64c62bfc65af9f8c969a8d04",
      "title": "Statue of Liberty",
      "description": "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
      "contact_id": "64c5d95adc7efae2a45ec376",
      "imageUrl":  "https://www.libertycopper.net/cdn/shop/articles/42205bc2af4b6e00db719df8823ebe9b.cdn.bubble.io_f1724941651381x578206759225914300_1724941555402x791956359979728900.png_2.png?v=1724941882",
      "rating": 4.8,
      "review": "1452 Reviews",
      "latitude": 40.689247,
      "longitude": -74.044502,
      "location": "Liberty Island, New York Harbor",
      "popular": [
          {
              "_id": "64c675be3cfa5e847bcd5439",
              "title": "Family-Friendly Resort",
              "imageUrl": "https://www.travelandleisure.com/thmb/2P5V1BlrWY0AF1ZGggtcV7XlMbc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-four-seasons-resort-orlando-at-walt-disney-world-resort-USFAMRESORTS0324-dfd4be173ce9417fa7d8869c13550bca.jpg",
              "rating": 4.6,
              "review": "12854 Reviews",
              "location": "Orlando, FL"
          },
          {
              "_id": "64c675793cfa5e847bcd5436",
              "title": "Urban Chic Boutique Hotel",
              "imageUrl": "https://q-xx.bstatic.com/xdata/images/hotel/max500/37310928.jpg?k=ed86bae15214fbb0850435f957c0a5077a8d817284eb5a00ca91f76697c205c1&o=",
              "rating": 4.8,
              "review": "2312 Reviews",
              "location": "San Francisco, CA"
          }
      ]
  }
  return (
    <ScrollView>
    <View>
      <NetworkImage
        source={place.imageUrl}
        width={"100%"}
        height={350}
        radius={30}
      />

      <AppBar
        top={40}
        left={20}
        right={20}
        title={place.title}
        color={COLORS.white}
        icon={"search1"}
        color1={COLORS.white}
        onPress={() => navigation.goBack()}
        onPress1={() => {}}
      />
    </View>

    <View style={styles.description}>
      <HeightSpacer height={15} />
      <ReusableText
        text={place.location}
        family={"medium"}
        size={TEXT.large}
        color={COLORS.black}
      />

      <DescriptionText text={place.description} />

      <View style={{ alignContent: "center" }}>
        <HeightSpacer height={20} />

        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Popular Hotels"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity onPress={() => {}}>
            <Feather name="list" size={20} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={20} />

        <PopularList data={place.popular} />

        <ReusableBtn
          onPress={() => navigation.navigate("HotelSearch")}
          btnText={"Find Best Hotels"}
          width={SIZES.width - 40}
          backgroundColor={COLORS.green}
          borderColor={COLORS.green}
          borderWidth={0}
          textColor={COLORS.white}
        />
        <HeightSpacer height={50} />
      </View>
    </View>
  </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20
  }
})