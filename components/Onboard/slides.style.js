import { StyleSheet} from 'react-native';
import { SIZES } from '../../constants/theme';
const styles = StyleSheet.create({
    image:{
        resizeMode:'cover',
        width:SIZES.width,
        height:SIZES.height
    },
    stack:{
        position:'absolute',
        bottom:0,
        marginVertical:50,
        marginHorizontal:10,
        justifyContent:'center',
        width:SIZES.width - 40,
    }
});

export default styles;