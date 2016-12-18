import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', error: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, email: '', password: '', error: '' };
    case LOGIN_FAILED:
      return { ...state, password: '', error: 'Authentication Failed!!' };
    default:
      return state;
  }
};
