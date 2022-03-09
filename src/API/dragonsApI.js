import axios from 'axios';

const fetchDragonsAPI = async () => {
  const res = await axios.get('https://api.spacexdata.com/v3/dragons');
  const { data } = res;
  return data;
};
export default fetchDragonsAPI;
