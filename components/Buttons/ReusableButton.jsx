import { Text,StyleSheet,TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const ReusableButton = ({btnText,textColor,width,bgColor,borderColor,borderWidth,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle(width,bgColor,borderColor,borderWidth)}>
        <Text style={styles.textStyle(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    textStyle:(textColor) => ({
        fontFamily:'medium' ,
        fontSize: SIZES.medium,
        color:textColor
    }),
    buttonStyle:(width,bgColor,borderColor,borderWidth) => ({
        width: width || SIZES.width-40,
        backgroundColor:bgColor,
        borderColor:borderColor,
        borderWidth:borderWidth,
        borderRadius:SIZES.small,
        alignItems:'center',
        justifyContent:'center',
        height:45,
        marginVertical:20
    })
});

export default ReusableButton;