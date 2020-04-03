import React, {Component} from 'react';

import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {createUser} from '../actions/userActions';

import {connect} from 'react-redux';

class Home extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange(text) {
    this.setState({email: text});
  }

  handlePasswordChange(text) {
    this.setState({password: text});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createUser(this.state.email, this.state.password);
  }

  render() {
    console.log('props: ', this.props);
    return (
      <View style={styles.container}>
        {typeof this.props.user !== 'undefined' && (
          <Text>Logged in user: {this.props.user.email}</Text>
        )}
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

export default connect(mapStateToProps, {createUser})(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
