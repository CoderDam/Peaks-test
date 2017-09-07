/* Npm import */
import { connect } from 'react-redux';


/* Local import */
import Form from 'src/components/Pupils/Form';
import { changeField, updatePupils } from 'src/store/reducer';


/* Code */
// State
const mapStateToProps = state => ({
  form: state.form,
});

// Dispatch
const mapDispatchToProps = dispatch => ({
  actions: {
    update: () => dispatch(updatePupils()),
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