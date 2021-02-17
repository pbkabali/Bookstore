import { CHANGE_FILTER } from '../actions/actionTypes';

const filterReducer = (state = 'All', action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default filterReducer;
