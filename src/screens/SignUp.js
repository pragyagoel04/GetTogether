import React, {Component} from 'react';

import {ImageBackground, View, TextInput, StyleSheet} from 'react-native';
import {createUser} from '../actions/userActions';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input,
  Spinner,
} from 'native-base';
import {connect} from 'react-redux';
import EventList from './EventList';

class SignUp extends Component {
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
    if (this.props.user.email != null) {
      this.props.navigation.navigate('EventList');
    }
    return this.props.spinner ? (
      <Spinner
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    ) : (
      <Container>
        <Title>GET TOGETHER</Title>
        <ImageBackground
          source={require('../assets/images/home_background.jpg')}
          style={{
            resizeMode: 'cover',
            justifyContent: 'center',
            flex: 1,
          }}>
          <Form>
            <Item
              fixedLabel
              style={{
                backgroundColor: '#ffffff',
                width: '93%',
              }}>
              <Input
                autoCapitalize="none"
                name="email"
                onChangeText={this.handleEmailChange.bind(this)}
                placeholder={'Email'}
              />
            </Item>
            <Item
              fixedLabel
              style={{
                backgroundColor: '#ffffff',
                width: '93%',
                margin: '1%',
              }}>
              <Input
                autoCapitalize="none"
                name="password"
                onChangeText={this.handlePasswordChange.bind(this)}
                placeholder={'Password'}
                TextContentType={'password'}
              />
            </Item>
            <Button
              block
              style={{
                width: '90%',
                alignSelf: 'center',
              }}
              onPress={this.handleSubmit.bind(this)}>
              <Text> Sign Up! </Text>
            </Button>
            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: 16,
              }}>
              Already a user?
              <Text onPress={() => this.props.navigation.navigate('Login')}>
                {' '}
                Login{' '}
              </Text>
            </Text>
          </Form>
        </ImageBackground>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps: ', state);
  return {
    user: state.user.user,
    errors: state.user.errors,
    spinner: state.user.spinner,
  };
}

export default connect(mapStateToProps, {createUser})(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
