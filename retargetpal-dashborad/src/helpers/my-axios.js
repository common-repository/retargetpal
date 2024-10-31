import axios from 'axios'
import { ADTECH_SERVER_DEV } from '../constans/constans';

const myAxios = axios.create({
    baseURL: ADTECH_SERVER_DEV,
    timeout: 100000,
  });
export default  myAxios