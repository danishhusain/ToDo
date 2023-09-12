// import React from 'react';
// import { View, Text, TextInput, StyleSheet } from 'react-native';
// import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
// import colors from '../styles/colors';
// import fontFamily from '../styles/fontFamily';
// import commonStyles from '../styles/commonStyles';

// const TextInputWithLabel = (props) => {
//     const { value, placeholder, onChangeText, inputStyle, label } = props;
//     return (
//         <View>
//             <Text style={styles.labelText}>{label} </Text>
//             <TextInput
//                 placeholder={placeholder}
//                 style={{ ...styles.inputStyle, ...(inputStyle || {}) }}
//                 value={value}
//                 onChangeText={onChangeText}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     inputStyle: {
//         fontSize: 14,
//         backgroundColor: colors.white,
//         borderRadius: moderateScale(2),
//         height: moderateScale(40),
//         paddingHorizontal: moderateScale(8),
//         marginBottom: moderateScaleVertical(16),
//         borderWidth: 1,
//         borderColor: colors.blackOpacity20,
//         alignItems: 'center',
//     },
//     labelText: {
//         fontSize: 20,
//         fontFamily: fontFamily.medium,
//         marginBottom: moderateScaleVertical(24),
//         textTransform: 'uppercase'
//     }
// });

// export default TextInputWithLabel;


import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../styles/colors';
const TextInputWithLabel = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? colors.red
              : isFocused
              ? colors.darkBlue
              : colors.light,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: colors.darkBlue, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: colors.darkBlue, flex: 1}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: colors.darkBlue, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: colors.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: colors.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: colors.whiteOpacity70,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default TextInputWithLabel;
