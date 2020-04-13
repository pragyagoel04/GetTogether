import {USER_FETCH, USER_FETCH_COMPLETE, USER_FETCH_ERROR} from './types';
import firebase from '../config';

export const createUser = (email, password) => (dispatch) => {
  dispatch({
    type: USER_FETCH,
  });
  const timeInMs = Date.now();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((createdUser) => {
      console.log(
        'got created user in x time : ',
        createdUser,
        Date.now() - timeInMs,
      );
      dispatch({
        type: USER_FETCH_COMPLETE,
        payload: createdUser,
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: USER_FETCH_ERROR,
        payload: err,
      });
    });
};

export const loginUser = (email, password) => (dispatch) => {
  dispatch({
    type: USER_FETCH,
  });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((signedInUser) => {
      console.log('got created user: ', signedInUser);
      dispatch({
        type: USER_FETCH_COMPLETE,
        payload: signedInUser,
      });
    })
    .catch((err) => {
      console.error(err);
      dispatch({
        type: USER_FETCH_ERROR,
        payload: err,
      });
    });
};
