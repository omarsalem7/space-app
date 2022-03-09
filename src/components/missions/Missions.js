import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import Mission from '../mission/Mission';

const Missions = () => {
  const missions = useSelector((state) => state.missionsReducer);
  return (
    <div className="missions">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>

        {missions.map(({
          id, missionName, description, status,
        }) => (
          <Mission
            status={status}
            id={id}
            key={id}
            missionName={missionName}
            description={description}
          />
        ))}
      </Table>
    </div>
  );
};

export default Missions;
