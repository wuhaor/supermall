import axios from "axios";

export function request(config) {
  const intance = new axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
  });
  // intance.interceptors.request.use(config => {
  //   console.log(config);
  //   return config
  // }, err => {
  //   console.log(err);
  // })
  intance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })
  return intance(config)
}

