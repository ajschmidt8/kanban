import {
  ADD_COLUMN,
  MOVE_COLUMN,
  DELETE_COLUMN
} from '../constants/ActionTypes';

const initialState = [
  {
    title: 'Summer Months',
    cardListId: 0
  },
  {
    title: 'Winter Months',
    cardListId: 1
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [
        ...state,
        {
          title: action.title,
          cardListId: action.cardListId
        }
      ];

    case DELETE_COLUMN:
      return state.filter((column, ind) => action.index !== ind);

    case MOVE_COLUMN:
      if (action.newIndex > action.currentIndex) action.newIndex -= 1;
      const newState = state.slice();
      const cardToMove = newState[action.currentIndex];
      newState.splice(action.currentIndex, 1);
      newState.splice(action.newIndex, 0, cardToMove);
      return newState;

    default:
      return state;
  }
};
