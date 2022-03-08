import React from 'react';
import PropTypes from 'prop-types';
import './rocket.css';
import Button from 'react-bootstrap/Button';

const Rocket = ({ rocketName, description, image }) => (
  <div className="rocket">
    <div className="rocket-img-container">
      <img className="rocket-img" src={image} alt={rocketName} />
    </div>
    <div className="rocket-detail">
      <h5>{rocketName}</h5>
      <p>{description}</p>
      <Button variant="primary" size="sm">
        Reserve Rocket
      </Button>
      {/* <Button variant="outline-secondary" size="sm">
        Cancel Reservation
      </Button> */}
    </div>
  </div>
);

Rocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;
