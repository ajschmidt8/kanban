import { connect } from 'react-redux';
import * as columnActions from '../actions/columns';
import * as cardActions from '../actions/cards';
import ColumnList from '../components/ColumnList';

const mapStateToProps = state => ({ columns: state.columns });

export default connect(
  mapStateToProps,
  { ...columnActions, addCardlist: cardActions.addCardlist }
)(ColumnList);
