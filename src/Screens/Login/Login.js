import { View, Text, TouchableOpacity, Keyboard, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import styles from './styles'
import { scale } from '../../styles/responsiveSize'
import navigationStrings from '../../constants/navigationStrings'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { useDispatch } from '../../redux/hooks'
import { logInUser } from '../../redux/reducers/authThunks'
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {
  const [inputs, setInputs] = React.useState({ email: '', password: '' });
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch()


  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }
  //validation
  const handleSubmit = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    } else if (!inputs.email.includes("@gmail.com")) {
      handleError('Please input @gmail.com', 'email');
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError('Min password length of 8', 'password');
      isValid = false;
  }
    if (isValid) {
      login();
    }
  };

  // LogIn with Email & Passward
  const login = async () => {
    // try {
    //   await auth().signInWithEmailAndPassword(inputs.email, inputs.password);
    //   console.log('login  sucessfully ');
    //   // console.log("Login data", inputs.email, inputs.password)

    // } catch (e) {
    //   console.log('Please make account', e);
    // }
    dispatch(logInUser(inputs.email, inputs.password))
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };
  const resetpassword = () => {
    const reset = auth().currentUser.email
    // dispatch(resetEmailVerification(reset))
    // console.log('reset password', reset)
  }




  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>LogIn</Text>
      <View style={styles.modalView}>

        <TextInputWithLabel
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="email-outline"
          label="Email"
          placeholder="Enter your email address"
          error={errors.email}
        />
        <TextInputWithLabel
          onChangeText={text => handleOnchange(text, 'password')}
          onFocus={() => handleError(null, 'password')}
          iconName="lock-outline"
          label="Password"
          placeholder="Enter your password"
          error={errors.password}
          password
        />
        <View style={{ alignItems: 'flex-end', }}>
          <TouchableOpacity onPress={() => goToScreen(navigationStrings.FORGOT_PASSWORD)}>
            <Text >reset passward</Text>
          </TouchableOpacity>
        </View>
        <Button mode='contained' style={{ marginVertical: 16 }} onPress={() => handleSubmit()}>Login</Button>
        <View style={[{ top: scale(16), }]}>
          <Text>New member?</Text>
          <TouchableOpacity style={{ alignSelf: 'flex-start', }}><Text style={styles.experienceText} onPress={() => goToScreen(navigationStrings.SIGNUP)}>Sign Up</Text></TouchableOpacity>
        </View>
      </View>

    </KeyboardAvoidingView>
  )
}

export default Login
