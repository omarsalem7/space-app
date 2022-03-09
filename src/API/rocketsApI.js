import axios from 'axios';

const fetchRocketsAPI = async () => {
  const res = await axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = res;
  return data;
};
export default fetchRocketsAPI;
