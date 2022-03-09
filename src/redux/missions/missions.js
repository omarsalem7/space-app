// types, actions creator and reducer

import fetchMissionsAPI from '../../API/missionsAPI';

const FETCH_MISSIONS = 'space/missions/FETCH_MISSIONS';
const JOIN_MISSION = 'space/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space/missions/LEAVE_MISSION';

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});
export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

const getMissions = (rockets) => ({
  type: FETCH_MISSIONS,
  payload: rockets,
});

export const fetchMissionsDispatch = () => async (dispatch) => {
  const missions = await fetchMissionsAPI();
  const filtered = missions.map((mission) => ({
    id: mission.mission_id,
    missionName: mission.mission_name,
    description: mission.description,
    status: false,
  }));
  dispatch(getMissions(filtered));
};

const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, status: true };
      });
      return newState;
    }
    case LEAVE_MISSION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) {
          return rocket;
        }
        return { ...rocket, status: false };
      });
      return newState;
    }
    default:
      return state;
  }
};
export default missionsReducer;
