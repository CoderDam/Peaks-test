/* Npm import */
import React from 'react';
import PropTypes from 'prop-types';


/* Local import */


/* Code */
const Pupil = ({ pupil, turn, actions }) => (
  <div className="pupil" style={{ transform: `rotate(${turn}deg)` }}>
    <div className="pupil-image">
      <img src={pupil.picture} alt={pupil.name} />
    </div>
    <p className="pupil-name">
      <a
        href={`mailto:${pupil.email}`}
        title={`écrire à ${pupil.name} (${pupil.email})`}
      >{pupil.name}</a>
    </p>
    <button
      className="pupil-update button"
      onClick={actions.updatePupil}
    >✎</button>
    <button
      className="pupil-delete button"
      onClick={actions.deletePupil}
    >✖</button>
  </div>
);

/* PropTypes */
Pupil.propTypes = {
  pupil: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
  turn: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};


/* Export */
export default Pupil;
