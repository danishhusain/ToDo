import React from 'react';
import {
  StyleProp,
  ViewStyle,
  Animated,
  StyleSheet,
  Platform,
  ScrollView,
  Text,
  SafeAreaView,
  I18nManager,
} from 'react-native';
import { AnimatedFAB } from 'react-native-paper';
import navigationStrings from '../constants/navigationStrings';
import { useNavigation } from '@react-navigation/native';

const AnimatedFABCompo = ({
  animatedValue,
  visible,
  extended,
  label,
  animateFrom,
  style,
  iconMode,

}) => {
  const [isExtended, setIsExtended] = React.useState(true);

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }
  const navigation = useNavigation()

  const isIOS = Platform.OS === 'ios';

  const onScroll = ({ nativeEvent }) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const fabStyle = { [animateFrom]: 16 };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView onScroll={onScroll}
        showsVerticalScrollIndicator={false}
      >
        {[...new Array(100).keys()].map((_, i) => (
          <Text>{i}</Text>
        ))}
      </ScrollView>
      <AnimatedFAB
        icon={'plus'}
        label={'Note'}
        extended={isExtended}
        onPress={() => goToScreen(navigationStrings.ADD_TASK_COMPO)}
        visible={visible}
        animateFrom={'right'}
        // iconMode={'static'}
        style={[styles.fabStyle, style, fabStyle]}
      />
    </SafeAreaView>
  );
};

export default AnimatedFABCompo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
  },
});