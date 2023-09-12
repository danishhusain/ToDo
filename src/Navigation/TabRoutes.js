import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator, BottomTabBar } from '@react-navigation/material-bottom-tabs';
import navigationStrings from '../constants/navigationStrings';
import Home from '../Screens/Home/Home';
import Search from '../Screens/Search/Search';
import colors from '../styles/colors';
import Profile from '../Screens/Profile/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TestScreen from '../Screens/TestScreen/TestScreen';



const BottomTab = createMaterialBottomTabNavigator();

const TabRoutes = (props) => {

  return (
    <BottomTab.Navigator
      tabBar={(tabsProps) => (
        <>
          <BottomTabBar {...tabsProps} />
        </>
      )}
      initialRouteName={navigationStrings.HOME}
      // barStyle={{ backgroundColor: 'tomato' }}
      activeColor="blue"
      inactiveColor="#3e2465"

      screenOptions={{
        headerShown: false,
        style: styles.customBottomtabsStyle,
        tabBarActiveTintColor: colors.blackColor,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name={navigationStrings.HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ?
                <MaterialCommunityIcons name="home" color={'blue'} size={26} />
                :
                <MaterialCommunityIcons name="home" size={26} />

            );
          },

        }}
      />

      <BottomTab.Screen
        name={navigationStrings.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ?
                <MaterialCommunityIcons name="magnify" color={'blue'} size={26} />

                : <MaterialCommunityIcons name="magnify" size={26} />

            );
          },
        }}
      />

      <BottomTab.Screen
        name={navigationStrings.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ?
                <MaterialCommunityIcons name="account" color={'blue'} size={26} />


                :
                <MaterialCommunityIcons name="account" size={26} />

            );

          },
        }}
      />
      <BottomTab.Screen
        name={navigationStrings.TestScreen}
        component={TestScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              focused ?
                <MaterialCommunityIcons name="account" color={'blue'} size={26} />


                :
                <MaterialCommunityIcons name="account" size={26} />

            );

          },
        }}
      />
    </BottomTab.Navigator>
  )
}
const styles = StyleSheet.create({
  customBottomtabsStyle: {
    // height: moderateScale(60)
  },

});

export default TabRoutes

