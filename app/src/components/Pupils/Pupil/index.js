/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */


/* Code */
const Pupil = ({ pupil, actions }) => (
  <div className="pupil">
    <div className="pupil-image">
      <img src={pupil.picture} alt={pupil.name} />
    </div>
    <p className="pupil-name">{pupil.name}</p>
    <button className="pupil-update" onClick={actions.updatePupil}>✎</button>
  </div>
);

/* PropTypes */
Pupil.propTypes = {
  pupil: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  actions: PropTypes.object.isRequired,
};


/* Export */
export default Pupil;
