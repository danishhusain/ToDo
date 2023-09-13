import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabRoutes from './TabRoutes'
import navigationStrings from '../constants/navigationStrings'
import AddTaskCompo from '../Components/AddTaskCompo'

const MainStack = (Stack) => {
  return (
    <>

      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.ADDTASKCOMPO}
        component={AddTaskCompo}
        options={{ headerShown: false }}

      />

    </>
  )
}

export default MainStack

const styles = StyleSheet.create({})