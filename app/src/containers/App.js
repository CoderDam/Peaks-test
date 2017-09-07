/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import App from 'src/components/App';
import { getData } from 'src/store/reducer';


/* Code */
// State
const mapStateToProps = undefined;

// Dispatch
const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData()),
});

// Connect
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);


/* Export */
export default container;
