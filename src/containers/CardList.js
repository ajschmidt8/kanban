import { connect } from 'react-redux';
import * as cardActions from '../actions/cards';
import CardList from '../components/CardList';

const mapStateToProps = (state, { cardListId }) =>
  state.cards.find(({ id }) => id === cardListId);

export default connect(
  mapStateToProps,
  cardActions
)(CardList);
