import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import commonStyles from '../styles/commonStyles';

const TextInputWithLabel = (props) => {
    const { value, placeholder, onChangeText, inputStyle, label } = props;
    return (
        <View>
            <Text style={styles.labelText}>{label} </Text>
            <TextInput
                placeholder={placeholder}
                style={{ ...styles.inputStyle, ...(inputStyle || {}) }}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 14,
        backgroundColor: colors.white,
        borderRadius: moderateScale(2),
        height: moderateScale(40),
        paddingHorizontal: moderateScale(8),
        marginBottom: moderateScaleVertical(16),
        borderWidth: 1,
        borderColor: colors.blackOpacity20,
        alignItems: 'center',
    },
    labelText: {
        fontSize: 20,
        fontFamily: fontFamily.medium,
        marginBottom: moderateScaleVertical(24),
        textTransform: 'uppercase'
    }
});

export default TextInputWithLabel;
