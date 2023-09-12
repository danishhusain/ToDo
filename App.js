import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import { moderateScale, textScale } from './src/styles/responsiveSize';
import fontFamily from './src/styles/fontFamily';
import Routes from './src/Navigation/Routes';
import { PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider  } from 'react-redux'
import { store  } from './src/redux/store';




const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <SafeAreaProvider>
          <Routes />
          <FlashMessage
            titleStyle={{
              marginRight: moderateScale(5),
              fontFamily: fontFamily.medium,
              fontSize: textScale(16)
            }}
            position='top'
          />
          {/* <FlashMessage position="top" /> */}

        </SafeAreaProvider >
      </PaperProvider>
    </ReduxProvider>

  )
}

export default App

const styles = StyleSheet.create({})