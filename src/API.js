import axios from "axios";

const baseURL =
  process.env.REACT_APP_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : process.env.REACT_APP_API_LOCAL;

const APIInstance = axios.create({
  baseURL,
  withCredentials: true
});

export default (endpoint, options) => {
  return APIInstance.request({
    url: endpoint,
    ...options,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }).then(res => res);
};
