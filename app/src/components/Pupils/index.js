/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */
import Pupil from 'src/containers/Pupils/Pupil';


/* Code */
const Pupils = ({ pupils, loading }) => (
  <div id="app-pupils">
    {!loading &&
      <ul id="app-pupils-list">
        {pupils.allIds.map(pupilId => (
          <li key={pupilId}><Pupil id={pupilId} /></li>
        ))}
      </ul>
    }
  </div>
);

/* PropTypes */
Pupils.propTypes = {
  pupils: PropTypes.shape({
    allIds: PropTypes.arrayOf(PropTypes.number).isRequired,
    byId: PropTypes.object.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};


/* Export */
export default Pupils;
