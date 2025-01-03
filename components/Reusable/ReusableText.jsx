import { Text,StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const ReusableText = ({text,family,size,color}) => {
  return (
    <Text style={styles.textStyle(family,size,color)}>{text}</Text>
  );
};


const styles = StyleSheet.create({
    textStyle:(family,size,color) => ({
        fontFamily:family ,
        fontSize:size || 12,
        color:color || COLORS.black
    })
});

export default ReusableText;