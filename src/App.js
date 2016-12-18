import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyANnOy6oKl9eXkFDcATZnLsFUmka_g3F-Q',
      authDomain: 'todos-26b62.firebaseapp.com',
      databaseURL: 'https://todos-26b62.firebaseio.com',
      storageBucket: 'todos-26b62.appspot.com',
      messagingSenderId: '1033143154547'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
