import React from 'react';
import { IoCheckmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import BLogimg from './BLogimg';
import Blogsdetails from './Blogsdetails';
const Blogitems = () => {
    return (
     <div>
          <div className='bg-blue-500 p-15 mx-auto rounded-2xl flex flex-col items-center'>
  <div className='text-center mb-4 '>
    <h1 className='text-3xl p-4 font-bold text-white'>About Easy Sub</h1>
    <p className=' text-white'>
      A unique restaurant that brings you delicious, quality food. Our main goal is to rediscover your taste and flavor while supporting local and well-established restaurants.The specialty of our kitchen is that we prepare a variety of local and international recipes, so that you get a variety of flavors. We are committed to creating a delightful experience, not just serving food.
    </p>
  </div>
  <Link to="/foodlist" className='bg-white hover:bg-red-600 hover:text-white text-blue-500 font-semibold py-2 px-4 rounded'>
    Get started
  </Link>
</div>
<div className='pt-12 pb-12'>
    <BLogimg/>
</div>

  <div className='bg-gray-100 p-15 mx-auto flex flex-col items-center rounded-2xl mt-12'>
  <div>
    <h1 className='text-3xl text-black p-4 font-bold'>Why Choose Easy Sub?</h1>
  </div>
  <div>
    <h1 className='p-4 flex items-center gap-5'>
      <IoCheckmarkSharp className='text-7xl  md:text-3xl text-orange-400' />
      Tailored experiences that surprise and delight every month.
    </h1>
    <h1 className='p-4 flex items-center gap-5'>
      <IoCheckmarkSharp className='text-7xl  md:text-3xl text-orange-400' />
      Support small local businesses and discover hidden gems.
    </h1>
    <h1 className='p-4 flex items-center gap-5'>
      <IoCheckmarkSharp className='text-7xl md:text-3xl text-orange-400' />
      High-quality, handpicked products delivered right to your doorstep.
    </h1>
  </div>
</div>

   <div className='pt-12 pb-6'>
    <Blogsdetails/>
   </div>
     </div>
    );
};

export default Blogitems;