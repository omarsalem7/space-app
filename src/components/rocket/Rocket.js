import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './rocket.css';
import Button from 'react-bootstrap/Button';
import { reserveRocket } from '../../redux/rockets/rockets';

const Rocket = ({
  id, rocketName, description, image,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket">
      <div className="rocket-img-container">
        <img className="rocket-img" src={image} alt={rocketName} />
      </div>
      <div className="rocket-detail">
        <h5>{rocketName}</h5>
        <p>{description}</p>
        <Button
          onClick={() => dispatch(reserveRocket(id))}
          variant="primary"
          size="sm"
        >
          Reserve Rocket
        </Button>
        {/* <Button variant="outline-secondary" size="sm">
        Cancel Reservation
      </Button> */}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
