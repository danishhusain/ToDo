import { Text, View, TouchableOpacity, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Button, IconButton, TextInput, } from 'react-native-paper'
import navigationStrings from '../../constants/navigationStrings'
import { moderateScale, scale } from '../../styles/responsiveSize'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useDispatch, useSelector } from '../../redux/hooks'
import { createUser } from '../../redux/reducers/authThunks'




const Signup = ({ navigation }) => {
  const [errors, setErrors] = useState({});
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch()

  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }
  const handleSubmit = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.name) {
      handleError('Please input name', 'name');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 8) {
      handleError('Min password length of 8', 'password');
      isValid = false;
    }
    if (isValid) {
      signinwithemailandpassword();
    }
  };

  const signinwithemailandpassword = async () => {
    //send signup data to reduxStore
    dispatch(createUser(inputs.email, inputs.password))

  };
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  return (
    <KeyboardAvoidingView style={styles.container} enabled={true}>
      <View>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>SignUp</Text>
      </View>

      <View style={styles.modalView}>
        <TextInputWithLabel
          onChangeText={text => handleOnchange(text, 'name')}
          onFocus={() => handleError(null, 'name')}
          iconName="account-outline"
          label="Name"
          placeholder="Enter your name"
          error={errors.name}
        />
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
        <Button mode='contained' style={{ marginVertical: 16 }} onPress={() => handleSubmit()}>SignUp</Button>
        <View style={[{ top: scale(16) }]}>
          <Text>Already a member?</Text>
          <TouchableOpacity style={{ alignSelf: 'flex-start', paddingVertical: 8 }}><Text style={styles.experienceText} onPress={() => goToScreen(navigationStrings.LOGIN)}>LogIn</Text></TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Signup

