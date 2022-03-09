// types, actions creator and reducer

import fetchDragonsAPI from '../../API/dragonsApI';

const FETCH_DRAGONS = 'space/dragons/FETCH_DRAGONS';
const RESERVE_DRAGON = 'space/dragons/RESERVE_DRAGON';
const CANCEL_RESERVATION = 'space/dragons/CANCEL_RESERVATION';

export const reserveDragon = (id) => ({
  type: RESERVE_DRAGON,
  payload: id,
});
export const cancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  payload: id,
});

const getDragons = (dragons) => ({
  type: FETCH_DRAGONS,
  payload: dragons,
});

export const fetchDragonsDispatch = () => async (dispatch) => {
  const dragons = await fetchDragonsAPI();
  const filtered = dragons.map((dragon) => ({
    id: dragon.id,
    dragonName: dragon.name,
    description: dragon.description,
    image: dragon.flickr_images[0],
    reserved: dragon.active,
  }));
  dispatch(getDragons(filtered));
};

const dragonsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DRAGONS:
      return action.payload;
    case RESERVE_DRAGON: {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
      return newState;
    }
    case CANCEL_RESERVATION: {
      const newState = state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return dragon;
        }
        return { ...dragon, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
};
export default dragonsReducer;
