import * as types from '../constants/ActionTypes';

export const addColumn = (title, cardListId) => ({
  type: types.ADD_COLUMN,
  title,
  cardListId
});

export const deleteColumn = index => ({ type: types.DELETE_COLUMN, index });

export const moveColumn = (currentIndex, newIndex) => ({
  type: types.MOVE_COLUMN,
  currentIndex,
  newIndex
});
