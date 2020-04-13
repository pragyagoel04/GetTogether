import React, {Component} from 'react';

import {ImageBackground, StyleSheet} from 'react-native';
import {loginUser} from '../actions/userActions';
import {
  Container,
  Title,
  Button,
  Text,
  Form,
  Item,
  Label,
  Input,
  Spinner,
} from 'native-base';
import {connect} from 'react-redux';
import EventList from './EventList';

class Login extends Component {
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
    this.props.loginUser(this.state.email, this.state.password);
  }

  render() {
    console.log('login props: ', this.props);
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
            {this.props.user.email !== undefined && (
              <Item
                fixedLabel
                style={{
                  backgroundColor: '#ffffff',
                  width: '93%',
                }}>
                <Label>Logged in user: {this.props.user.email}</Label>
              </Item>
            )}
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
              <Text> Login </Text>
            </Button>
            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: 16,
              }}>
              Don't have an account?
              <Text onPress={() => this.props.navigation.navigate('SignUp')}>
                {' '}
                SignUp{' '}
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

// const mapDispatchToProps = (dispatch) => {
//   return {loginUser};
// };

export default connect(mapStateToProps, {loginUser})(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
