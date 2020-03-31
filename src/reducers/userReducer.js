import {ADD_USER, USER_FETCH, USER_FETCH_COMPLETE} from '../actions/types';
import firebase from '../config';

const initialState = {
  user: {},
};

export default function (state = initialState, action, payload) {
  switch (action.type) {
    case USER_FETCH:
        state {spinner: true};
      break;
      case USER_FETCH_COMPLETE:
          state{user: payload}
    default:
      return state;
  }
};
