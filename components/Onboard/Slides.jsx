import { View, Image, ScrollView } from 'react-native';
import styles from './slides.style';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableText from '../Reusable/ReusableText';
import ReusableButton from '../Buttons/ReusableButton';
import { useNavigation } from '@react-navigation/native';

const Slides = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
        <Image source={item.image} style={styles.image} />
        <View style={styles.stack}>
        <ScrollView>
            <ReusableText 
            size={SIZES.xxLarge} 
            color={COLORS.white} 
            family={'medium'} 
            text={item.title}/>

            <ReusableButton 
            btnText={'Lets GO!'} 
            textColor={COLORS.white} 
            bgColor={COLORS.red} 
            borderColor={COLORS.red} 
            borderWidth={0} 
            onPress={() => {
              navigation.navigate('Bottom');
            }}/>
        </ScrollView>
        </View>
        
    </View>
  );
};

export default Slides;