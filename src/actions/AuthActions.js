import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types';

export const emailChanged = (email) => {
  return {
    type: EMAIL_CHANGED,
    payload: email
  };
};

export const passwordChanged = (password) => {
  return {
    type: PASSWORD_CHANGED,
    payload: password
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
      type: LOGIN_SUCCESS,
      payload: user
      });
      Actions.main();
    })
    .catch(error => dispatch({
      type: LOGIN_FAILED,
      payload: error
    }));
  };
};
