import axios from 'axios';

export const HttpRequest = axios.create({
  timeout: 200000,
});
