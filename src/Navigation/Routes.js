import { View, Text, useColorScheme } from 'react-native'
import React, { useState, useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthScreen from './AuthScreen';
import { useDispatch, useSelector } from '../redux/hooks';
import auth from '@react-native-firebase/auth';
import { setUser } from '../redux/reducers/authSlice';



const Stack = createNativeStackNavigator();

const Routes = () => {
  const user = useSelector(state => state.authSlice.user);
  const [initializing, setInitializing] = useState(true);
  const dispatch = useDispatch()

  // Handle user state changes
  function onAuthStateChanged(user) {
    dispatch(setUser(user))
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
          user ?
            <>{MainStack(Stack)}</>
            : <>{AuthScreen(Stack)}</>
        }
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Routes