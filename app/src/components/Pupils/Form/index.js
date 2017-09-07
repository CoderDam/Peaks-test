/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */


/* Code */
const Form = ({ form, actions }) => (
  <form
    className="app-pupils-form"
    onSubmit={(evt) => {
      evt.preventDefault();
      actions.update();
    }}
  >
    <input
      className="input"
      id="app-pupils-form-input-name"
      value={form.inputs.name}
      placeholder="nom de l'élève"
      onChange={(evt) => {
        const { value } = evt.target;
        actions.inputs.change({ field: 'name', value });
      }}
    />
    <input
      type="email"
      className="input"
      id="app-pupils-form-input-email"
      value={form.inputs.email}
      placeholder="adresse mail de l'élève"
      onChange={(evt) => {
        const { value } = evt.target;
        actions.inputs.change({ field: 'email', value });
      }}
    />
    <input
      className="input"
      id="app-pupils-form-input-picture"
      value={form.inputs.picture}
      placeholder="url de la photo de l'élève"
      onChange={(evt) => {
        const { value } = evt.target;
        actions.inputs.change({ field: 'picture', value });
      }}
    />
    <button type="submit">OK</button>
  </form>
);

/* PropTypes */
Form.propTypes = {
  form: PropTypes.shape({
    display: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    inputs: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  actions: PropTypes.object.isRequired,
};


/* Export */
export default Form;
