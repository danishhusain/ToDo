import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, moderateScaleVertical } from "../../styles/responsiveSize";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: moderateScale(8),
        // paddingVertical: moderateScaleVertical(16),
        justifyContent: 'center',
        // alignItems:'center'


    },

    btnStyle: {
        backgroundColor: colors.lighPink,
        alignSelf: 'center',
        marginTop: moderateScaleVertical(16)
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