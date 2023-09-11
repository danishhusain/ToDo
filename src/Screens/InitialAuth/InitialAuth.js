import { Text, View, } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import styles from './styles'
import { Button } from 'react-native-paper'

const InitialAuth = ({ navigation }) => {

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>To Do App</Text>
      <View style={styles.modalView}>
        <Button onPress={() => goToScreen(navigationStrings.LOGIN)} mode='contained'  style={styles.input}>LOGIN</Button>
        <Button onPress={() => goToScreen(navigationStrings.SIGNUP)} mode='contained' style={styles.input}>SIGNUP</Button>
      </View>


    </View>
  )
}

export default InitialAuth
