import React, {Component} from 'react';

import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

import firebase from '../config';

import {connect} from 'react-redux';

class Home extends Component {
  handleEmailChange(text) {
    this.setState({email: text});
  }

  handlePasswordChange(text) {
    this.setState({password: text});
  }

  handleSubmit(event) {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        this.props.user.email,
        this.props.user.password,
      )
      .then((createdUser) => {
        console.log(createdUser);
        this.props.createUser(createdUser);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          name="email"
          onChangeText={this.handleEmailChange.bind(this)}
          placeholder={'Email'}
        />
        <TextInput
          autoCapitalize="none"
          name="password"
          onChangeText={this.handlePasswordChange.bind(this)}
          placeholder={'Password'}
          TextContentType={'password'}
        />
        <Button title={'Register'} onPress={this.handleSubmit.bind(this)} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    errors: state.errors,
  };
}

export default connect(mapStateToProps)(Home);

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
