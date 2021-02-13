import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});
