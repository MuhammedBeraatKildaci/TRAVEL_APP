import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.style';
import {Feather, AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme';
import { AppBar, HeightSpacer } from '../../components';
import ReusableTile from '../../components/Reusable/ReusableTile';

const Search = ({navigation}) => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const search = [
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
   <SafeAreaView style={reusable.container}>
     
    <View style={styles.searchContainer}>
     
      <View style={styles.searchWrapper}>
      
        <TextInput 
        style={styles.input}
        value={searchKey}
        onChangeText={setSearchKey}
        placeholder='Where do you want to visit'
        />
      </View>

      <TouchableOpacity style={styles.searchBtn}>
        <Feather name='search' size={24} color={COLORS.white}/>
      </TouchableOpacity>
    </View>

    {search.length === 0 ? (
      <View>
        <HeightSpacer height={'20%'}/>
        <Image 
        source={require('../../assets/images/search.png')}
        style={styles.searchImage}
      />
      </View>
    ): (
      <FlatList 
      data={search}
      keyExtractor={(item)=> item._id}
      renderItem={({item})=> (
        <View style={styles.tile}>
        <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
        </View>
      )}
      />
    )}

   </SafeAreaView>
  )
}

export default Search