import React, { use, useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

 import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../provider/AuthProvider';



const Register = () => {
    const {createUser, setUser, updateUser} = use(AuthContext)
  const navigate = useNavigate()

  const [nameError, setNameError] = useState('');
const [photoError, setPhotoError] = useState('');

const handleRegister = (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const photo = form.photo.value.trim();
  const email = form.email.value;
  const password = form.password.value;

  // নামের যাচাই
  if (name.length < 5) {
    setNameError("Name must be at least 5 characters long");
    return;
  } else {
    setNameError('');
  }

  // ছবি URL যাচাই
  if (!photo || photo.length === 0) {
    setPhotoError("Photo URL is required");
    return;
  } else if (photo.length > 5000) {
    toast.error("Photo URL too long. Use a smaller image URL.");
    return;
  } else {
    setPhotoError('');
  }

  // ইউজার ক্রিয়েট
  createUser(email, password)
    .then((result) => {
      const user = result.user;
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        })
        .catch((error) => {
          console.log("Profile update error:", error);
          toast.error("Profile update failed.");
        });
    })
    .catch((error) => {
      console.log("Registration error:", error);
      toast.error("Your account registration failed.");
    });
};
    return (
      <div className="hero bg-base-200 min-h-screen ">
  <div className="hero-content flex-col lg:flex-row-reverse lg:mt-18">
     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
      <form onSubmit={handleRegister} className="card-body">
         <h1 className="text-4xl font-bold">Register new!</h1>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your name"  required/>

          {nameError && <p className='text-red-500'>{nameError}</p>}

          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" required />
          {photoError && <P className='text-red-500'>{photoError}</P>}
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" required/>
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" required/>
          
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
        </fieldset>
       <div className='flex items-center justify-center gap-2 bg-white shadow p-2 mt-2 font-bold'><FcGoogle />
               <a href="https://www.google.com" className=' '>Login with Google</a>
             </div>
        <p>Don't have an account? <Link to='/auth/login'><a className='text-blue-500 underline'>Login new</a></Link></p>
      </form>
      < ToastContainer></ToastContainer>
    </div>
  </div>
</div>
    );
};

export default Register;