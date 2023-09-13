import { Text, View, KeyboardAvoidingView, Keyboard } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import TextInputWithLabel from '../../Components/TextInputWithLabel'
import { Button } from 'react-native-paper'
import { useDispatch, } from '../../redux/hooks'
import { resetEmailVerification } from '../../redux/reducers/authThunks'


const ForgotPassword = () => {
  const [inputs, setInputs] = useState({ email: '' });
  const [errors, setErrors] = useState({});
  
  const dispatch = useDispatch()


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
    } else {
      dispatch(resetEmailVerification(inputs.email))
    }
  }

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({ ...prevState, [input]: text }));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={{ fontSize: 26, fontWeight: 'bold' }}>ForgotPassword</Text>
      <View style={styles.modalView}>

        <TextInputWithLabel
          onChangeText={text => handleOnchange(text, 'email')}
          onFocus={() => handleError(null, 'email')}
          iconName="email-outline"
          label="Email"
          placeholder="Enter  email "
          error={errors.email}
        />
        <Button mode='contained' style={{ marginVertical: 16 }} onPress={() => handleSubmit()}>Reset Passward</Button>


      </View>
    </KeyboardAvoidingView >
  )
}

export default ForgotPassword

