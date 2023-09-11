import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'
import WrapperContainer from '../../Components/WrapperContainer'


const Search = () => {

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }

  return (
    <View style={{}}>
      <Text style={{ color: colors.blackOpacity40 }}>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})