import {USER_FETCH, USER_FETCH_COMPLETE} from './types';
import firebase from '../config';

export const createUser = (email, password) => (dispatch) => {
  dispatch({
    type: USER_FETCH,
  });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((createdUser) => {
      console.log('got created user: ', createdUser);
      dispatch({
        type: USER_FETCH_COMPLETE,
        payload: createdUser,
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
