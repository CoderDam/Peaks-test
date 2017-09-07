/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Pupils from 'src/components/Pupils';


/* Code */
// State
const mapStateToProps = state => ({
  loading: state.loading,
  pupils: state.pupils,
});

// Dispatch
const mapDispatchToProps = undefined;

// Connect
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pupils);


/* Export */
export default container;
