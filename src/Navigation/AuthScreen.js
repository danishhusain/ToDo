import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import OnBoarding from '../Screens/OnBoarding/OnBoarding'
import InitialAuth from '../Screens/InitialAuth/InitialAuth'
import Login from '../Screens/Login/Login'
import Signup from '../Screens/Signup/Signup'
import OtpVerification from '../Screens/OtpVerification/OtpVerification'
import ForgotPassword from '../Screens/ForgotPassword/ForgotPassword'

const AuthScreen = (Stack, isFirstTime = true) => {
  return (
    <>
      {!isFirstTime && <Stack.Screen
        name={navigationStrings.ON_BOARDING}
        component={OnBoarding}
        options={{ headerShown: false }}
      />}
      <Stack.Screen
        name={navigationStrings.INITIAL_AUTH}
        component={InitialAuth}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.SIGNUP}
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.OTP_VERIFICATION}
        component={OtpVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={navigationStrings.FORGOT_PASSWORD}
        component={ForgotPassword}
        options={{ headerShown: false, }}
      />
    </>
  )
}

export default AuthScreen

const styles = StyleSheet.create({})