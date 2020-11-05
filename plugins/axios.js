import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers = {
  'x-rapidapi-host': 'makevoid-skicams.p.rapidapi.com',
  'x-rapidapi-key': 'f07d18bbf5mshf4053b8a5f5cf5cp14233ejsnf435406d06d2',
  useQueryString: true,
};

export default () => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
