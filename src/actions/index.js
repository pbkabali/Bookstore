import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: { ...book, id: (Math.random() * 30000).toFixed(0) },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});
