import Axios from "axios";


export default Axios.create({
  baseURL: 'http://192.168.1.169:8080',
  withCredentials: true,
  headers: {
    common: {
      Accept: 'application/json'
    },
  }
})
