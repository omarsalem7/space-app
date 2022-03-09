import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap/';
import './profile.css';

const Profile = () => {
  const Rockets = useSelector(({ rocketsReducer }) => rocketsReducer.filter((ro) => ro.reserved));
  const dragons = useSelector(({ dragonsReducer }) => dragonsReducer.filter((dr) => dr.reserved));
  const missions = useSelector((state) => state.missions.missions);
  const filteredMissions = missions.filter((mi) => mi.isUserJoinedToMission);
  return (
    <div className="profile">
      <div className="group">
        {filteredMissions.length === 0 ? <h5>No Missions</h5> : <h5>Missions</h5>}
        <ListGroup>
          {filteredMissions.map((mission) => (
            <ListGroup.Item key={mission.id}>
              {mission.missionName}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="group">
        {Rockets.length === 0 ? <h5>No Rockets</h5> : <h5>Rockets</h5>}
        <ListGroup>
          {Rockets.map((rocket) => (
            <ListGroup.Item key={rocket.id}>{rocket.rocketName}</ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="group">
        {dragons.length === 0 ? <h5>No Dragons</h5> : <h5>Dragons</h5>}
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
