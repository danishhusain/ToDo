import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { moderateScale, textScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';

const HeaderComp = (props) => {
    const { leftText, onPressRight, headerStyle ,rightText,righttextStyle} = props;
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <Text style={styles.textStyle}>{leftText}</Text>
            <TouchableOpacity onPress={onPressRight}>
                <Text style={{...styles.righttextStyle,...righttextStyle}}>{rightText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(52),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
        alignItems:'center'
    },
    textStyle: {
        fontSize: textScale(26),
        fontFamily: fontFamily.medium,
        color: colors.theme,
        textTransform: 'uppercase',
        fontWeight:'bold'

    },
    righttextStyle: {
        fontSize: textScale(16),
        fontFamily: fontFamily.medium,
        color: colors.darkBlue,

    },
});

export default HeaderComp;
