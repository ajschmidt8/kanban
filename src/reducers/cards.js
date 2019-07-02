import {
  DELETE_CARD,
  ADD_CARD,
  MOVE_CARD,
  ADD_CARDLIST,
  DELETE_CARDLIST
} from '../constants/ActionTypes';

const initialState = [
  {
    id: 0,
    list: ['June', 'July', 'August']
  },
  { id: 1, list: ['December', 'January', 'February'] }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CARD:
      return state.map(cardList =>
        cardList.id === action.cardListId
          ? {
              ...cardList,
              list: cardList.list.filter(
                (list, index) => index !== action.index
              )
            }
          : cardList
      );

    case ADD_CARD:
      return state.map(cardList =>
        cardList.id === action.cardListId
          ? {
              ...cardList,
              list: [...cardList.list, action.text]
            }
          : cardList
      );

    case MOVE_CARD:
      const sameColumnIncreasing =
        action.currentCardListId === action.newCardListId &&
        action.newIndex > action.currentIndex;

      if (sameColumnIncreasing) action.newIndex -= 1;

      let cardToMove;
      let newCardList;
      return state
        .reduce((acc, cardList) => {
          let list = cardList.list;

          // Save card and remove it from existing cardList
          if (cardList.id === action.currentCardListId) {
            cardToMove = cardList.list[action.currentIndex];
            list = cardList.list.filter(
              (list, index) => index !== action.currentIndex
            );
          }

          if (cardList.id === action.newCardListId) {
            newCardList = { ...cardList, list };
            return acc;
          }

          return [...acc, { ...cardList, list }];
        }, [])
        .concat({
          ...newCardList,
          list: [
            ...newCardList.list.slice(0, action.newIndex),
            cardToMove,
            ...newCardList.list.slice(action.newIndex)
          ]
        });

    case ADD_CARDLIST:
      return [...state, { id: action.id, list: [] }];

    case DELETE_CARDLIST:
      return state.filter(({ id }) => action.id !== id);

    default:
      return state;
  }
};
