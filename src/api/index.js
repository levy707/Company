import axios from 'axios';

export default {
  getSkiCam: () => axios.get('/cams.json'),
};
