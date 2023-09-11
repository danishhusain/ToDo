import { View, Text,useColorScheme } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './MainStack';
import AuthScreen from './AuthScreen';
import { useSelector } from '../redux/hooks';


const Stack = createNativeStackNavigator();

const Routes = () => {
  const appData = useSelector(state => state.authSlice);
  const theme = useColorScheme();

  return (
    <NavigationContainer  >
      <Stack.Navigator>
        {
          !!appData?.userData || appData.isFirstTime ? <>{MainStack(Stack)}</>
            : <>{AuthScreen(Stack)}</>
        }
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Routes