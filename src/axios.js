import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'https://clone-16650.firebaseio.com/',
});

export default axiosInstance;
