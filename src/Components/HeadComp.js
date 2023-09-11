import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';

const HeaderComp = (props) => {
    const { leftText, onPressRight, headerStyle } = props;
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            <Text style={styles.textStyle}>{leftText}</Text>
            <TouchableOpacity onPress={onPressRight}>
                <Text>Image</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(16),
    },
    textStyle: {
        fontSize: 18,
        fontFamily: fontFamily.medium,
        color: colors.theme,
        textTransform: 'uppercase',
    },
});

export default HeaderComp;
