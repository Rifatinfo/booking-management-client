import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure  =  axios.create({
    baseURL: 'http://localhost:5000',
  });

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const {signOut} = UseAuth();
  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    config.headers.authorization = `Barer ${token}`
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response){
    return response;
  }, async function  (error) {
    if(error){
      const status = error.response.status;
      console.log(status);
      if(status === 401  || status === 403){
        signOut();
        navigate('/sign-in');
      }
    }
    
    return Promise.reject(error);
  });
    return  axiosSecure;
};

export default UseAxiosSecure;
