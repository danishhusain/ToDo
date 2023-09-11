import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import styles from './styles'
import { scale } from '../../styles/responsiveSize'
import navigationStrings from '../../constants/navigationStrings'
import validations from '../../utils/validations'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }
  //validation
  const handleSubmit = () => {

    //   if (!email.includes('@gmail.com' && password.length < 8)) {
    //     setErrorMessage('Please enter a valid email address');
    //   } else if (password.length < 8) {
    //     setErrorMessage('Password must be at least 8 characters');
    //   } else {
    //     setErrorMessage('');
    //     // submit form data
    //     // setShowLoader(true)
    //     // login(email, password);
    //   }

  };

  // console.log(">", email, password)
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Login</Text>
      <View style={styles.modalView}>
        <TextInput
          value={email}
          onChangeText={email => setEmail(email)}
          placeholder='enter email' mode='outlined' style={styles.inputText} focusable={true} keyboardType="email-address" autoComplete="email" error={false} />
        {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}
        <TextInput
          value={password}
          onChangeText={password => setPassword(password)}
          placeholder='enter password' mode='outlined' style={styles.inputText} />
        {/* {errorMessage ? <Text>{errorMessage}</Text> : null} */}

        <View style={{ alignItems: 'flex-end', }}>
          <TouchableOpacity onPress={() => goToScreen(navigationStrings.FORGOT_PASSWORD)}><Text  >reset passward</Text></TouchableOpacity>
        </View>
        <Button mode='contained' style={{ marginVertical: 16 }} onPress={() =>handleSubmit()}>Login</Button>
        <View style={[{ top: scale(16), }]}>
          <Text>New member?</Text>
          <TouchableOpacity  ><Text style={styles.experienceText} onPress={() => goToScreen(navigationStrings.SIGNUP)}>Sign Up</Text></TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default Login
