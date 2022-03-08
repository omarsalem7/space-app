// actions creator and reducers

import fetchRocketsAPI from '../../API/rocketsApI';

const FETCH_ROCKETS = 'FETCH_ROCKETS';

const getRockets = (rockets) => ({
  type: FETCH_ROCKETS,
  payload: rockets,
});

export const fetchRocketsDispatch = () => async (dispatch) => {
  const rockets = await fetchRocketsAPI();
  const filtered = rockets.map((rocket) => ({
    id: rocket.id,
    rocketName: rocket.rocket_name,
    description: rocket.description,
    image: rocket.flickr_images,
  }));
  dispatch(getRockets(filtered));
};

const rocketsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};
export default rocketsReducer;
