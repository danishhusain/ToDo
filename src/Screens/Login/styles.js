import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScaleVertical(16),

    },
    experienceText: {
        ...commonStyles.fontSize18,
        fontFamily:fontFamily.bold,
        alignSelf:'center',
       alignSelf:"flex-start"
    },
    btnStyle: {
        backgroundColor: colors.lighPink, 
        alignSelf: 'center' ,
        marginTop:moderateScaleVertical(16)
    },
    headerStyle: {
        backgroundColor: colors.whiteColor,
        paddingVertical: moderateScaleVertical(14),
        paddingHorizontal: moderateScale(16),
        flex: 1,
        justifyContent: 'center'
    },
    modalView: {
        backgroundColor: colors.whiteColor,
        // backgroundColor:'red',
        paddingVertical: moderateScaleVertical(14),
        paddingHorizontal: moderateScale(16),
        flex: 1,
        justifyContent: 'center'

    },
    inputText: {
        marginVertical: 4,
    },
   
});

export default styles