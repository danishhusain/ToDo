import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TabRoutes from './TabRoutes'
import navigationStrings from '../constants/navigationStrings'
import AddTaskCompo from '../Components/AddTaskCompo'
import AnimatedFABCompo from '../Components/AnimatedFabCompo'

const MainStack = (Stack) => {
  return (
    <>

      <Stack.Screen
        name={navigationStrings.TAB_ROUTES}
        component={TabRoutes}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.ADD_TASK_COMPO}
        component={AddTaskCompo}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name={navigationStrings.Animated_FAB_Compo}
        component={AnimatedFABCompo}
        options={{ headerShown: false }}

      />

    </>
  )
}

export default MainStack

const styles = StyleSheet.create({})