import { View, Text, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthScreen from './AuthScreen';
import { useSelector } from '../redux/hooks';
import auth from '@react-native-firebase/auth';



const Stack = createNativeStackNavigator();

const Routes = () => {
  const appData = useSelector(state => state.authSlice);

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  

  return (
    <NavigationContainer  >
      <Stack.Navigator>
        {
          !!appData?.userData || appData.isFirstTime ? 
          // user?
          <> { MainStack(Stack) }</>
      : <>{AuthScreen(Stack)}</>
        }
    </Stack.Navigator>

    </NavigationContainer >
  )
}

export default Routes