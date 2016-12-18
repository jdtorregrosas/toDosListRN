import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOADING
} from '../actions/types';

const INITIAL_STATE = { email: '', password: '', error: '', loading: false };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_SUCCESS:
      return { ...state, email: '', password: '', error: '', loading: false };
    case LOGIN_FAILED:
      return { ...state, password: '', error: 'Authentication Failed!!', loading: false };
    case LOADING:
      return { ...state, loading: true, error: '' };
    default:
      return state;
  }
};
