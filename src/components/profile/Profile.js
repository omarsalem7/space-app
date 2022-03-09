import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap/';
import './profile.css';

const Profile = () => {
  const reserved = useSelector(({ rocketsReducer }) => rocketsReducer.filter((ro) => ro.reserved));
  return (
    <div className="profile">
      <div className="missions">
        <ListGroup>
          <ListGroup.Item>fake data</ListGroup.Item>
          <ListGroup.Item>fake data</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="rockets">
        <ListGroup>
          {reserved.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.rocketName}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
export default Profile;
