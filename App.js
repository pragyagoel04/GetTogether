import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import MyStack from './MyStack';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyStack />
      </Provider>
    );
  }
}
