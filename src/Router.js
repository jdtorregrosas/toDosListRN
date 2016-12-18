import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import TodosList from './components/TodosList';
import NewTodo from './components/NewTodo';

class RouterComponent extends Component {
  logOut() {
    firebase.auth().signOut().then(() => {
      Actions.auth();
    });
  }
  render() {
    return (
      <Router
        navigationBarStyle={styles.navBarStyle}
        titleStyle={styles.titleStyle}
        sceneStyle={{ paddingTop: 65 }}
      >
        <Scene key="auth" initial>
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Log out"
            onRight={this.logOut.bind(this)}
            key="todosList"
            component={TodosList}
            title="Your ToDos"
            initial
          />
          <Scene
            key="createTodo"
            component={NewTodo}
            title="Create your ToDo"
          />
        </Scene>
      </Router>
    );
  }
}

const styles = {
  navBarStyle: {
    backgroundColor: '#66C067'
  },
  titleStyle: {
    color: '#FFF'
  }
};

export default RouterComponent;
