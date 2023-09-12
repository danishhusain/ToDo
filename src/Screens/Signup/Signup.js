import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Button, TextInput, } from 'react-native-paper'
import navigationStrings from '../../constants/navigationStrings'
import { scale } from '../../styles/responsiveSize'
import auth from '@react-native-firebase/auth';


const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goToScreen = (screen) => {
    navigation.navigate(screen)
  }
  const handleSubmit = () => {
    // console.log("text", name, password, email)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Signup</Text>
      <View style={styles.modalView}>
        <TextInput
          value={name}
          onChangeText={name => setName(name)}
          placeholder='enter name' mode='outlined' style={styles.inputText} />
        <TextInput
          value={email}
          onChangeText={email => setEmail(email)}
          placeholder='enter email' mode='outlined' style={styles.inputText} />
        <TextInput
          value={password}
          onChangeText={password => setPassword(password)}
          placeholder='enter password' mode='outlined' style={styles.inputText} />
        <Button mode='contained' style={{ marginVertical: 16 }} onPress={() => handleSubmit(email,password)}>Sign Up</Button>
        <View style={[{ top: scale(16), }]}>
          <Text>Already a member?</Text>
          <TouchableOpacity ><Text style={styles.experienceText} onPress={() => goToScreen(navigationStrings.LOGIN)}>Log In</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Signup

