/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Pupil from 'src/containers/Pupils/Pupil';
import Form from 'src/containers/Pupils/Form';


/* Code */
const Pupils = ({ pupils, loading, form, actions }) => (
  <div id="app-pupils">
    <button
      id="app-pupils-add"
      onClick={actions.addPupil}
    >+</button>
    {!loading &&
      <ul id="app-pupils-list">
        {pupils.allIds.map(pupilId => (
          <li key={pupilId}><Pupil id={pupilId} /></li>
        ))}
      </ul>
    }
    {form.display &&
      <Form />
    }
  </div>
);

/* PropTypes */
Pupils.propTypes = {
  pupils: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    // byId: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
  form: PropTypes.shape({
    display: PropTypes.bool.isRequired,
    // type: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};


/* Export */
export default Pupils;
