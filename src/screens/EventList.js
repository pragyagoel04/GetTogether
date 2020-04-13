import React, {Component} from 'react';

import {ImageBackground, View, TextInput, StyleSheet} from 'react-native';
import {getUserEvents} from '../actions/eventActions';
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

class EventList extends Component {
  render() {
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
        <Text> ALL MY EVENTS</Text>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps: ', state);
  return {
    // events: state.event.events,
    // errors: state.user.errors,
    // spinner: state.user.spinner,
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {loginUser};
// };

export default connect(mapStateToProps, {getUserEvents})(EventList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
