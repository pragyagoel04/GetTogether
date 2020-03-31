import {USER_FETCH, USER_FETCH_COMPLETE} from './types';
import firebase from '../config';

export const createUser = () => (dispatch) => {
  dispatch({
    type: USER_FETCH,
  });
  firebase
    .auth()
    .createUserWithEmailAndPassword(
      this.props.user.email,
      this.props.user.password,
    )
    .then((createdUser) => {
      console.log(createdUser);
      dispatch({
        type: USER_FETCH_COMPLETE,
        payload: createdUser,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
