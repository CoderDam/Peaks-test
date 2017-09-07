/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Pupil from 'src/components/Pupils/Pupil';


/* Code */
// State
const mapStateToProps = (state, ownProps) => ({
  pupil: state.pupils.byId[ownProps.id],
});

// Dispatch
const mapDispatchToProps = undefined;

// Connect
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pupil);


/* Export */
export default container;
