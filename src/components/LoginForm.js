import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Button,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import { emailChanged, passwordChanged, login } from '../actions';

class LoginForm extends Component {
  onChangeEmail(email) {
    this.props.emailChanged(email);
  }
  onChangePassword(password) {
    this.props.passwordChanged(password);
  }
  onLogin() {
    this.props.login(this.props.email, this.props.password);
  }
  renderError() {
    if (this.props.error) {
      return (
        <Text style={styles.failedStyle}> Authentication failed!!</Text>
      );
    }
    return;
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
    return (
      <Button
        onPress={this.onLogin.bind(this)}
        style={styles.buttonStyle}
        block
        success
      >
        Login
      </Button>
    );
  }
  render() {
    return (
      <Container>
        <Content style={styles.contentStyle}>
            <List>
              <ListItem>
                <Image
                  style={styles.imageStyle}
                  source={require('../img/todo.png')}
                />
              </ListItem>
              <ListItem>
                  <InputGroup>
                      <Icon name="ios-person" style={{ color: '#66C067' }} />
                      <Input
                        onChangeText={this.onChangeEmail.bind(this)}
                        placeholder="EMAIL"
                        value={this.props.email}
                      />
                  </InputGroup>
              </ListItem>
              <ListItem>
                  <InputGroup>
                      <Icon name="ios-unlock" style={{ color: '#66C067' }} />
                      <Input
                        onChangeText={this.onChangePassword.bind(this)}
                        placeholder="PASSWORD"
                        secureTextEntry
                        value={this.props.password}
                      />
                  </InputGroup>
              </ListItem>
            </List>
            {this.renderError()}
            {this.renderButton()}
        </Content>
    </Container>
    );
  }
}

const styles = {
  buttonStyle: {
    marginTop: 20,
    marginBottom: 20
  },
  contentStyle: {
    margin: 40
  },
  imageStyle: {
    height: 100,
    width: 100,
    alignSelf: 'center'
  },
  failedStyle: {
    fontSize: 20,
    color: '#F00',
    alignSelf: 'center'
  }
};

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, login })(LoginForm);
