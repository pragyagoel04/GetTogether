import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Home from './src/screens/Home';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
