import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

const ButtonComp = (props) => {
  const { onPress, btnText, btnStyle, btnTextStyle } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.btnStyle, ...btnStyle }}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: colors.theme,
    height: moderateScale(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    paddingHorizontal: moderateScale(8),
  },
  btnTextStyle: {
    // ...commonStyles.fontSize26,
    textTransform: 'uppercase'
  },
});

export default ButtonComp;
