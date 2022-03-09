import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './mission.css';
import { Badge, Button } from 'react-bootstrap';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const Mission = ({
  id, missionName, description, status,
}) => {
  const dispatch = useDispatch();
  return (
    <tbody>
      <tr>
        <td className="name">{missionName}</td>
        <td>{description}</td>
        <td className="status">
          {status ? (
            <Badge bg="info">Active Member</Badge>
          ) : (
            <Badge bg="secondary">NOT A MEMBER</Badge>
          )}
        </td>
        <td className="actions">
          {status ? (
            <Button
              variant="outline-danger"
              onClick={() => dispatch(leaveMission(id))}
            >
              Leave Mission
            </Button>
          ) : (
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(joinMission(id))}
            >
              Join Mission
            </Button>
          )}
        </td>
      </tr>
    </tbody>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Mission;
