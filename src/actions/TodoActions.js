import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TODO_UPDATE, TODO_CREATE, TODOS_FETCH_SUCCESS } from './types';

export const todoUpdate = ({ prop, value }) => {
  return {
    type: TODO_UPDATE,
    payload: { prop, value }
  };
};

export const todoCreate = ({ title, description, date }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/todos`)
    .push({
      title,
      description,
      date
    })
    .then(() => {
      dispatch({
        type: TODO_CREATE
      });
      Actions.todosList({ type: 'reset' });
    });
  };
};

export const todosFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/todos`)
    .on('value', snapshot => {
      dispatch({
        type: TODOS_FETCH_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
};
