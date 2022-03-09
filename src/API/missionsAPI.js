import axios from 'axios';

const fetchMissionsAPI = async () => {
  const res = await axios.get('https://api.spacexdata.com/v3/missions');
  const { data } = res;
  return data;
};
export default fetchMissionsAPI;
