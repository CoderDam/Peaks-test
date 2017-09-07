/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Pupils from 'src/components/Pupils';
import { addPupil } from 'src/store/reducer';


/* Code */
// State
const mapStateToProps = state => ({
  loading: state.loading,
  pupils: state.pupils,
  form: state.form,
});

// Dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    addPupil: () => dispatch(addPupil()),
  },
});

// Connect
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pupils);


/* Export */
export default container;
