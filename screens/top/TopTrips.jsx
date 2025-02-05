import { FlatList, View } from 'react-native'
import React from 'react';
import ReusableTile from '../../components/Reusable/ReusableTile'


const TopTrips = ({navigation}) => {
  const places = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Walt Disney World",
      location: "U.S.A New York ",
      imageUrl:
        "https://read.nxtbook.com/walt_disney_world/2021_digital_brochure/wdw_resort_digital_brochure/assets/b1dad90afe4c820bdba59e4ea4f30fb6.jpg",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Statue of Liberty",
      location: "U.S.A New York ",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Front_view_of_Statue_of_Liberty_with_pedestal_and_base_2024.jpg/640px-Front_view_of_Statue_of_Liberty_with_pedestal_and_base_2024.jpg",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Golden Gate Bridge",
      location: "U.S.A New York ",
      imageUrl:
        "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Yellowstone National Park",
      location: "U.S.A New York ",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE0wrYHSOP0DO3b5ex9c25Rg9g1yPUZOSZNA&s",
      rating: 4.8,
      review: "24455 Reviews",
    }
  ];

  return (
    <View style={{margin: 20}}>

      <FlatList 
      data={places}
      showVerticalScrollIndicator={false}
      keyExtractor={(item)=> item._id}
      renderItem={({item})=> (
        <View style={{marginBottom: 10}}>
          <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
        </View>
      )}
      />
      
    </View>
  )
}

export default TopTrips