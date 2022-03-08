import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './rocket.css';
import { Button, Badge } from 'react-bootstrap/';
import { reserveRocket, cancelReservation } from '../../redux/rockets/rockets';

const Rocket = ({
  id, rocketName, description, image, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="rocket">
      <div className="rocket-img-container">
        <img className="rocket-img" src={image} alt={rocketName} />
      </div>
      <div className="rocket-detail">
        <h5>{rocketName}</h5>

        <p>
          {reserved && <Badge bg="info">Reserved</Badge>}
          {description}
        </p>

        {reserved ? (
          <Button
            onClick={() => dispatch(cancelReservation(id))}
            variant="outline-secondary"
            size="sm"
          >
            Cancel Reservation
          </Button>
        ) : (
          <Button
            onClick={() => dispatch(reserveRocket(id))}
            variant="primary"
            size="sm"
          >
            Reserve Rocket
          </Button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
