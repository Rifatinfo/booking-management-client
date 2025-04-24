// import { signIn } from "next-auth/react";
// import { useContext } from "react";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import {  useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";

export default function LoginForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInWithGoogle, createUser } = useContext(AuthContext)
  const usePublic = UseAxiosPublic();
  const from = location?.state?.from?.pathname || '/'
  console.log(location.state, navigate);

  const handleLoginForm = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    
    try {
      const result = await createUser(email, password);
      console.log('User created:', result.user);
      const userInfo = {
        email : result.email,
        name : result.name
      }
      usePublic.post('/user', userInfo)
      .then(res => {
        if(res.data.insertedId){
          e.target.value = ''
          Swal.fire({
            title: "Signin Successful!",
            icon: "success",
            draggable: true
          });
        }
      })
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
      .then(result => {
        console.log(result.user);
        const userInfo  = {
          email : result.user.email,
          name : result.user.displayName,
          photo : result.user.photoURL,
          role : 'admin'
        }
        usePublic.post('/user', userInfo)
      .then(res => {
        console.log(res.data);
        
         Swal.fire({
            title: "Signin Successful!",
            icon: "success",
            draggable: true
          });
        navigate('/')
      })
      })
      navigate(from, { replace: true })
      // toast.success('Signin Successful')
    } catch (err) {
      console.log(err)
      // toast.error(err?.message)
      Swal.fire({
        title: "Error Occ!",
        icon: "error",
        draggable: true
      });
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">Welcome back!</h2>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center border rounded-lg p-2 mb-4 gap-2 text-gray-600 hover:bg-gray-100"
        >
          {/* <img src="/google-logo.png" alt="Google" className="w-5 h-5 mr-2" /> */}
          <FcGoogle className="text-2xl" />

          Sign in with Google
        </button>

        <div className="text-center text-sm text-gray-500 mb-4">OR LOGIN WITH EMAIL</div>

        <form onSubmit={handleLoginForm}>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4 focus:outline-none"
          />

          <button type="submit" className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800">
            Sign In
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-4">
          OR <a to="/register" href="#" className="text-blue-500">SIGN UP</a>
        </p>
      </div>
    </div>
  );
}