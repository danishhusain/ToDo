import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import HeaderComp from '../../Components/HeadComp'
import styles from './styles'
import colors from '../../styles/colors'
import AnimatedFABCompo from '../../Components/AnimatedFabCompo'



const Home = () => {


  return (
    <View style={{ flex: 1 }}>
      <HeaderComp
        leftText="ToDo"
        headerStyle={{
          backgroundColor: colors.blackOpacity15,
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