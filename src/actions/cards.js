import * as types from '../constants/ActionTypes';
export const ADD_CARDLIST = 'ADD_CARDLIST';

export const deleteCard = (cardListId, index) => ({
  type: types.DELETE_CARD,
  cardListId,
  index
});

export const addCard = (cardListId, text) => ({
  type: types.ADD_CARD,
  cardListId,
  text
});

export const moveCard = (
  currentCardListId,
  currentIndex,
  newCardListId,
  newIndex
) => ({
  type: types.MOVE_CARD,
  currentCardListId,
  currentIndex,
  newCardListId,
  newIndex
});

export const addCardlist = id => ({ type: types.ADD_CARDLIST, id });

export const deleteCardlist = id => ({ type: types.DELETE_CARDLIST, id });
