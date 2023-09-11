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
        fontFamily:fontFamily.medium,
        alignSelf:'center',
       alignSelf:"flex-start"

    },
    btnStyle: {
        backgroundColor: colors.lighPink, 
        alignSelf: 'center' ,
        marginTop:moderateScaleVertical(16)
    },
    headerStyle: {
        alignItems: 'center',
        paddingHorizontal: 0,
        marginBottom: moderateScaleVertical(24)
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