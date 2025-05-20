import React, { use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
 
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
        <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
         <p>Don't have an account? <Link to="/auth/register"><a className='text-blue-500 underline'>Register new</a></Link></p>
      </form>
    </div>
  </div>
 
</div>
      
    );
};

export default Login;