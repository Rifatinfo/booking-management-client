import axios from "axios";

const usePublic = axios.create({
    baseURL: 'http://localhost:5000',
  }); 
const UseAxiosPublic = () => {
    return usePublic;
};

export default UseAxiosPublic;