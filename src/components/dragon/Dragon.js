import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './dragon.css';
import { Button, Badge } from 'react-bootstrap/';
import { reserveDragon, cancelReservation } from '../../redux/dragons/dragons';

const Dragon = ({
  id, dragonName, description, image, reserved,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="dragon">
      <div className="dragon-img-container">
        <img className="dragon-img" src={image} alt={dragonName} />
      </div>
      <div className="dragon-detail">
        <h5>{dragonName}</h5>

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
            onClick={() => dispatch(reserveDragon(id))}
            variant="primary"
            size="sm"
          >
            Reserve Dragon
          </Button>
        )}
      </div>
    </div>
  );
};

Dragon.propTypes = {
  dragonName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Dragon;
