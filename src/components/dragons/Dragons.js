import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from '../dragon/Dragon';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragonsReducer);
  return (
    <div>
      {dragons.map(({
        id, dragonName, description, image, reserved,
      }) => (
        <Dragon
          reserved={reserved}
          id={id}
          key={id}
          dragonName={dragonName}
          description={description}
          image={image}
        />
      ))}
    </div>
  );
};

export default Dragons;
