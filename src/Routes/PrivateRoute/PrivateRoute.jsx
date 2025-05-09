import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    
    if(loading){
       return <span className="loading loading-bars loading-lg"></span>
    }

    if(user){
       return children;
    }
    
    return <Navigate state={{from : location}} replace to="/login"></Navigate>
    
};

export default PrivateRoute;