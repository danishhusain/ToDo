import { View, Text, Button } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import FlashMessage, { showMessage } from 'react-native-flash-message'




const Home = ({ navigation }) => {
  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }

  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => goToScreen(navigationStrings.SEARCH)} title='SEARCH' />
    </View>
  )
}

export default Home