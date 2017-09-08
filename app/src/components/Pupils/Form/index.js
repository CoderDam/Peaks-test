/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */


/* Code */
const Form = ({ form, actions }) => (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
  <form
    id="app-pupils-form"
    onSubmit={(evt) => {
      evt.preventDefault();
      actions.update();
    }}
    onKeyUp={evt => evt.key === 'Escape' && actions.hideForm()}
  >
    {/* NAME */}
    <input
      className="input"
      id="app-pupils-form-input-name"
      value={form.inputs.name}
      placeholder="nom de l'élève"
      // eslint-disable-next-line jsx-a11y/no-autofocus
      autoFocus
      onChange={(evt) => {
        const { value } = evt.target;
        actions.inputs.change({ field: 'name', value });
      }}
    />

    {/* E-MAIL */}
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

    {/* PICTURE */}
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

    {/* BUTTONS */}
    <button
      id="app-pupils-form-cancel"
      className="button"
      type="button"
      onClick={actions.hideForm}
    >✘</button>

    <button
      id="app-pupils-form-add"
      className="button"
      type="submit"
    >✔</button>
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
