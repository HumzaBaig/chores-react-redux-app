import React from 'react';
import { connect } from 'react-redux';
import Chorelist from './chorelist';
import { allChores } from '../../reducers/selector';
import { requestChores, createChore } from '../../actions/chore_actions';


const mapStateToProps = (state) => ({
  chores: allChores(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestChores: () => dispatch(requestChores()),
  createChore: (chore) => dispatch(createChore(chore))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chorelist);
