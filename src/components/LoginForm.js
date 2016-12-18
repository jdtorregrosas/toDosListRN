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
                      />
                  </InputGroup>
              </ListItem>
            </List>
            {this.renderError()}
            <Button
              onPress={this.onLogin.bind(this)}
              style={styles.buttonStyle}
              block
              success
            >
              Login
            </Button>
            <Text>{ this.props.email }</Text>
            <Text>{ this.props.password }</Text>
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
    margin: 20
  },
  imageStyle: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  },
  failedStyle: {
    fontSize: 20,
    color: '#F00',
    alignSelf: 'center'
  }
};

const mapStateToProps = (state) => {
  const { email, password, error } = state.auth;
  return {
    email,
    password,
    error
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, login })(LoginForm);
