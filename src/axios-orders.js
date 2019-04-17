import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://maloufde-react-burger-builder.firebaseio.com/'
});

export default instance
