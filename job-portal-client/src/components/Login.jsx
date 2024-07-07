import React from 'react'
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth ,signInWithPopup} from "firebase/auth";
import app from '../firebase/firebase.config';


const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleLogin = ()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;

          console.log(user);
        }).catch((error) => {
         
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }

  return (
    <div className='h-screen w-full items-center flex justify-center'>
      <button className='bg-blue text-white px-8 py-2' onClick={handleLogin}>LogIn</button>
    </div>
  )
}

export default Login
