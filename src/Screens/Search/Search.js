import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getItem } from '../../utils/utils'

const Search = () => {
  console.log(getItem("USER"))
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})