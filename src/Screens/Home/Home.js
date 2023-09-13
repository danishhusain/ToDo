import { View, Text, Button } from 'react-native'
import React from 'react'
import navigationStrings from '../../constants/navigationStrings'
import FlashMessage, { showMessage } from 'react-native-flash-message'
import { useDispatch, useSelector } from '../../redux/hooks'
import HeaderComp from '../../Components/HeadComp'
import styles from './styles'
import colors from '../../styles/colors'
import AnimatedFabCompo from '../../Components/AnimatedFabCompo'




const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }


  return (
    <View style={{ flex: 1 }}>
      <HeaderComp
        leftText="ToDo"
        headerStyle={{
          backgroundColor: colors.blackOpacity15,
          // height:80,

        }}
      />
      <View style={styles.container}>

        <View style={styles.modalView}>
          <AnimatedFabCompo />
        </View>
      </View>
    </View>
  )
}

export default Home