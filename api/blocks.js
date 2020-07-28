import axios from "axios";

axios.defaults.baseURL = "https://api.fsn365.com";

// 设置一个响应拦截器
axios.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err)
);

const blocksList = () => {
  return axios.get("/blocks");
};

export { blocksList };
