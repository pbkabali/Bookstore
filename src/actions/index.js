import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actionTypes';

export const createBook = book => {
  const totalChapters = (Math.random() * 50).toFixed(0);
  return {
    type: CREATE_BOOK,
    payload: {
      ...book,
      id: (Math.random() * 30000).toFixed(0),
      totalChapters,
      finishedChapters: (Math.random() * totalChapters).toFixed(0),
    },
  };
};

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
