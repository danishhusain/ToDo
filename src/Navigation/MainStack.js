import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import TabRoutes from './TabRoutes'

const MainStack = (Stack) => {
  return (
    <>
    <Stack.Screen
      name={navigationStrings.TAB_ROUTES}
      component={TabRoutes}
      options={{ headerShown: false }}
    
    />
  </>
  )
}

export default MainStack

const styles = StyleSheet.create({})