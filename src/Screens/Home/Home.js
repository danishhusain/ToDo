import { View, Text, Button } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { useSelector } from '../../redux/hooks'




const Home = ({ navigation }) => {
  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }

  console.log("SelectorData", SelectorData)

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button onPress={() => goToScreen(navigationStrings.SEARCH)} title='SEARCH' />
    </View>
  )
}

export default Home