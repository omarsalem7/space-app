import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap/';
import './profile.css';

const Profile = () => {
  const Rockets = useSelector(({ rocketsReducer }) => rocketsReducer.filter((ro) => ro.reserved));
  const dragons = useSelector(({ dragonsReducer }) => dragonsReducer.filter((dr) => dr.reserved));
  console.log(dragons);
  return (
    <div className="profile">
      <div className="group">
        <ListGroup>
          <ListGroup.Item>fake data</ListGroup.Item>
          <ListGroup.Item>fake data</ListGroup.Item>
        </ListGroup>
      </div>
      <div className="group">
        <ListGroup>
          {Rockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.rocketName}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="group">
        <ListGroup>
          {dragons.map((dragon) => (
            <ListGroup.Item key={dragon.id}>{dragon.dragonName}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};
export default Profile;
