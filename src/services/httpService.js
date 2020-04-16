import axios from "axios";

axios.interceptors.response.use(null, function (error) {
  console.log(error);
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post
};
