import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../rocket/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <div>
      {rockets.map(({
        id, rocketName, description, image,
      }) => (
        <Rocket
          key={id}
          rocketName={rocketName}
          description={description}
          image={image[0]}
        />
      ))}
    </div>
  );
};

export default Rockets;
