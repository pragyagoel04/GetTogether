import {
  USER_FETCH,
  USER_FETCH_COMPLETE,
  USER_FETCH_ERROR,
} from '../actions/types';

const initialState = {
  user: {},
  spinner: false,
  errors: [],
};

export default function (state = initialState, action) {
  console.log('previous state: ', state);
  console.log('new action type, ', action);
  console.log('new payload: ', action.payload);
  switch (action.type) {
    case USER_FETCH:
      return {...state, spinner: true};
    case USER_FETCH_COMPLETE:
      return {...state, spinner: false, user: action.payload.user};
    case USER_FETCH_ERROR:
      return {
        ...state,
        spinner: false,
        errors: [action.payload, ...state.errors],
      };
    default:
      return {...state};
  }
}
