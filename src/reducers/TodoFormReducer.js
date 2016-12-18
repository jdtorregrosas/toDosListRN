import { TODO_UPDATE, TODO_CREATE } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  date: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case TODO_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
