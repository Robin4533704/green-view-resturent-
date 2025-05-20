import React from 'react';
import { Link } from 'react-router-dom';

const Blogsdetails = () => {
    return (
        <div>
         <div className='bg-blue-500 p-15 mx-auto rounded-2xl flex flex-col items-center'>
  <div className='text-center mb-4 '>
    <h1 className='text-3xl p-4 text-white font-bold'>Join the Easy Sub Family</h1>
    <p className=' text-white '>
     Ready to experience the best subscription box around? Join us today and start enjoying curated experiences delivered straight to your door.
    </p>
  </div>
  <Link to="/" className='bg-white hover:bg-red-600 hover:text-white text-blue-500 font-semibold py-2 px-4 rounded'>
    Get started
  </Link>
</div>
        </div>
    );
};

export default Blogsdetails;