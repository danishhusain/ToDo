// authThunks.js

import auth from '@react-native-firebase/auth';
import { setError, setLoading, setUser } from './authSlice';
import { showError, showSuccess } from '../../utils/helperFunctions';


// Create User Thunk
export const createUser = (email, password) => async (dispatch) => {
  // console.log("createUser", email, password);
  try {
    dispatch(setLoading(true));
    const userCredential = auth().createUserWithEmailAndPassword(email, password);
    const user = (await userCredential).user;
    // {user? setItem("USER",user.metadata):null}

    dispatch(setUser(user));
    dispatch(setLoading(false));
    showSuccess("account created successfully")

  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    showError("email-already-in-use")
  }

};

// Sign In User Thunk
export const logInUser = (email, password) => async (dispatch) => {

  try {
    dispatch(setLoading(true));
    const userCredential = auth().signInWithEmailAndPassword(email, password);
    const user = (await userCredential).user;
    showSuccess("log in succesfully")
    dispatch(setUser(user));
    dispatch(setLoading(false));

  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    showError("user-not-found")
  }
};



// Listen to Auth State Changes Thunk
export const listenToAuthChanges = () => (dispatch) => {
  auth().onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser(user));
    } else {
      dispatch(setUser(null));
    }
  });
};

export const logout = () => (dispatch) => {
  try {
    auth().signOut();
    dispatch(setUser(null));
    showSuccess("logout successfully")

  } catch (e) {
    console.log('logOut Error', e);
    showError(e)
  }

};

//Password Reset Outside
export const resetEmailVerification = (email) => (dispatch) => {
  auth().sendPasswordResetEmail(email)
    .then(() => showSuccess('password reset email has been sent ssuccefully'))
    .catch(e => showError('enter correct email'));

};