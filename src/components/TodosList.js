import React, { Component } from 'react';
import {
  Container,
  Fab,
  ListItem,
  Text,
  Thumbnail,
  Icon
} from 'native-base';
import { ListView, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
import { todosFetch } from '../actions';


class TodosList extends Component {
  componentWillMount() {
    this.props.todosFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ todos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(todos);
  }
  renderRow(todo) {
    return (
      <ListItem>
          <Thumbnail square size={80} source={require('../img/todo.png')} />
          <Text>{todo.title}</Text>
          <Text note>{todo.description}</Text>
          <Text note>{todo.date}</Text>
      </ListItem>
    );
  }
  render() {
    return (
      <Container>
        <View>
          <ListView
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />

        </View>
        <Fab
          style={{ backgroundColor: '#66C067'
        }}
        onPress={() => { Actions.createTodo(); }}
        >
          <Icon name="md-add" />
        </Fab>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const todos = _.map(state.todos, (val, uid) => {
    return { ...val, uid };
  });
  return { todos };
};
export default connect(mapStateToProps, { todosFetch })(TodosList);
