import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
import colors from '../styles/colors';
import Loader from './Loader';

const WrapperContainer = (props) => {
  const {
    headerStyle,
    isLoading = false,
    statusBarColor = colors.white,
    barStyle = "dark-content",
    children
  } = props;
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
      <SafeAreaView style={styles.container}>
        {children}
      </SafeAreaView>
      <Loader isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    marginHorizontal: moderateScale(16)
  },
  headerStyle: {
    alignItems: 'center',
    paddingHorizontal: 0,
    marginBottom: moderateScaleVertical(24)
  }
});

export default WrapperContainer;
