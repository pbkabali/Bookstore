import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
