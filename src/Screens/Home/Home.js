import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from '../../redux/hooks'
import HeaderComp from '../../Components/HeadComp'
import styles from './styles'
import colors from '../../styles/colors'
import AnimatedFABCompo from '../../Components/AnimatedFabCompo'



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
          <AnimatedFABCompo />
        </View>
      </View>
    </View>
  )
}

export default Home