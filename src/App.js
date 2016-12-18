import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <LoginForm />
    </Provider>
  );
};

export default App;
