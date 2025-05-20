import React, { use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
 import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [error,setError]=useState("");
  const location= useLocation();
  const navigate=useNavigate()

  console.log(location);
const {signin} = use(AuthContext)
const handlelogin =(e)=>{
e.preventDefault();
const form = e.target;
const email = form.email.value;
const password = form.password.value;
console.log({email,password});
signin(email, password)
.then(result=>{
  const user= result.user;
  console.log(user);
   navigate(`${location.state ? location.state : "/"}`)

}) .catch((error) => {
    const errorCode = error.code;
   
    toast("Oops! Something went wrong.", setError(errorCode)
    );
  //  alert(errorCode, errorMessage)
  });
}

    return (
     
       
         <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:mt-18 m-18 w-full mx-auto lg:flex-row-reverse">
            

    <div className="text-center lg:text-left">
     
      
    </div>
    
    <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl">
        
      <form onSubmit={handlelogin} className="card-body">
         <h1 className="text-4xl font-bold">Login now!</h1>
         {/* email */}
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required/>
          {/* password */}
          <label className="label">Password</label>
          <input type="password" required name='password' className="input" placeholder="Password" />
          { error && <p className='text-red-500'>{error}</p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
        </fieldset>
       <div className='flex items-center justify-center gap-2 bg-white shadow p-2 mt-2 font-bold'><FcGoogle />
         <a href="https://www.google.com" className=' '>Login with Google</a>
       </div>
        
         <p>Don't have an account? <Link to="/auth/register"><a className='text-blue-500 underline'>Register new</a></Link></p>
      </form>
    </div>
  </div>
 
</div>
      
    );
};

export default Login;