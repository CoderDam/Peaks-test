/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Form from 'src/components/Pupils/Form';
import { changeField, updatePupils, hideForm } from 'src/store/reducer';


/* Code */
// State
const mapStateToProps = state => ({
  form: state.form,
});

// Dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    update: () => dispatch(updatePupils()),
    hideForm: () => dispatch(hideForm()),
    inputs: {
      change: fieldObj => dispatch(changeField(fieldObj)),
    },
  },
});

// Connect
const container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);


/* Export */
export default container;
