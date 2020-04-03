import {USER_FETCH, USER_FETCH_COMPLETE} from '../actions/types';

const initialState = {
  user: {},
  spinner: {},
  errors: [],
};

export default function (state = initialState, action, payload) {
  console.log('previous state: ', state);
  console.log('new action type, ', action);
  console.log('new payload: ', payload);
  switch (action.type) {
    case USER_FETCH:
      return {...state, spinner: true};
    case USER_FETCH_COMPLETE:
      return {...state, user: payload};
    default:
      return {...state};
  }
}
