/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */


/* Code */
const Pupil = ({ pupil }) => (
  <div className="pupil">
    <div className="pupil-image">
      <img src={pupil.profilePic} alt={pupil.name} />
    </div>
    <span className="pupil-name">{pupil.name}</span>
  </div>
);

/* PropTypes */
Pupil.propTypes = {
  pupil: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
  }).isRequired,
};


/* Export */
export default Pupil;
