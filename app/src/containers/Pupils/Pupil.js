/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Pupil from 'src/components/Pupils/Pupil';
import { updatePupil, deletePupil } from 'src/store/reducer';


/* Code */
// State
const mapStateToProps = (state, ownProps) => ({
  pupil: state.pupils.byId[ownProps.id],
  turn: (Math.floor(Math.random() * (40 + 40 + 1)) - 40) / 10,
});

// Dispatch
const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    updatePupil: () => dispatch(updatePupil(ownProps.id)),
    deletePupil: () => dispatch(deletePupil(ownProps.id)),
  },
});

// Connect
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pupil);


/* Export */
export default container;
