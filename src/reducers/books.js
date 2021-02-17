import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const booksReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== payload.id);
    default:
      return state;
  }
};

export default booksReducer;
