import {EVENT_LIST_FETCH} from './types';
import firebase from '../config';

export const getUserEvents = () => (dispatch) => {
  dispatch({
    type: EVENT_LIST_FETCH,
  });
};
