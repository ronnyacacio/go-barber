import axios from 'axios';
import ip from 'ip';

const api = axios.create({
  baseURL: `http://${ip.address()}:3333`,
});

export default api;
