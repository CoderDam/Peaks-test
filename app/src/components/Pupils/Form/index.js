/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


/* Local import */


/* Code */
const Form = ({ form, regex, actions }) => (
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
      className={classNames('input', {
        'input--incorrect': form.review && !form.inputs.name.trim(),
      })}
      id="app-pupils-form-input-name"
      value={form.inputs.name}
      placeholder="nom de l'élève"
      title="nom de l'élève"
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
      className={classNames('input', {
        'input--incorrect': form.review && !form.inputs.email.trim(),
      })}
      id="app-pupils-form-input-email"
      value={form.inputs.email}
      placeholder="adresse mail de l'élève"
      title="adresse mail de l'élève"
      onChange={(evt) => {
        const { value } = evt.target;
        actions.inputs.change({ field: 'email', value });
      }}
    />

    {/* PICTURE */}
    <input
      className={classNames('input', {
        'input--incorrect': form.review && (!form.inputs.picture.trim() || !form.inputs.picture.match(regex)),
      })}
      id="app-pupils-form-input-picture"
      value={form.inputs.picture}
      placeholder="url photo (jpg, jpeg, gif, png)"
      title="url photo (jpg, jpeg, gif, png)"
      onChange={(evt) => {
        const { value } = evt.target;
        actions.inputs.change({ field: 'picture', value });
      }}
    />

    {/* BUTTONS */}
    <button
      id="app-pupils-form-cancel"
      className="button"
      title="annuler"
      type="button"
      onClick={actions.hideForm}
    >✘</button>

    <button
      id="app-pupils-form-add"
      className="button"
      title="valider"
      type="submit"
    >✔</button>
  </form>
);

/* PropTypes */
Form.propTypes = {
  form: PropTypes.shape({
    display: PropTypes.bool.isRequired,
    review: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    inputs: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  regex: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};


/* Export */
export default Form;
