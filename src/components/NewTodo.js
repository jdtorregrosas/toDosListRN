import React, { Component } from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  InputGroup,
  Input,
  Button,
  Text
} from 'native-base';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker';
import { todoUpdate, todoCreate } from '../actions';

class NewTodo extends Component {
  onButtonPress() {
    const { title, description, date } = this.props;
    this.props.todoCreate({ title, description, date });
  }
  onDateChange(date) {
    this.props.todoUpdate({
        prop: 'date',
        value: date
    });
  }
  render() {
    return (
      <Container>
        <Content style={styles.contentStyle}>
            <List>
              <ListItem>
                  <InputGroup>
                      <Input
                        placeholder="TITLE"
                        value={this.props.title}
                        onChangeText={text => this.props.todoUpdate({
                          prop: 'title',
                          value: text
                        })}
                      />
                  </InputGroup>
              </ListItem>
              <ListItem>
                  <InputGroup>
                      <Input
                        placeholder="DESCRIPTION"
                        value={this.props.description}
                        onChangeText={text => this.props.todoUpdate({
                          prop: 'description',
                          value: text
                        })}
                      />
                  </InputGroup>
              </ListItem>
              <ListItem>
                <DatePicker
                  style={{ width: 250 }}
                  date={this.props.date}
                  mode="datetime"
                  placeholder="DATE"
                  format="YYYY-MM-DD HH:mm"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  iconSource={require('../img/todo.png')}
                  onDateChange={this.onDateChange.bind(this)}
                />
              </ListItem>
            </List>
            <Button
              onPress={this.onButtonPress.bind(this)}
              block
              success
            >
              Save
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
  const { title, description, date } = state.todoForm;
  return { title, description, date };
};

export default connect(mapStateToProps, { todoUpdate, todoCreate })(NewTodo);
