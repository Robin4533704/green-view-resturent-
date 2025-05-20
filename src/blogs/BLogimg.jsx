import React from 'react';
import image from "../assets/image/WhatsApp Image 2024-12-24 at 12.33.16_6bba692d.jpg"
import image1 from "../assets/image/download11.webp"
import image2 from "../assets/image/download 12.jpeg"
const BLogimg = () => {
    return (
      <div className='p-24 bg-black text-center rounded-2xl text-white'>
  <h1 className='text-4xl font-bold mb-8'>Meet Our Team</h1>
  <div className='bg-orange-300 p-4 gap-12 flex  justify-center rounded-2xl'>
    {/* প্রথম সদস্য */}
    <div className='flex flex-col items-center'>
      <img className='w-24 rounded-full mb-2' src={image} alt="" />
      <h1 className='text-lg font-semibold'>MD: Robin</h1>
      <p className='text-sm'>CEO & Founder</p>
    </div>
    {/* দ্বিতীয় সদস্য */}
    <div className='flex flex-col items-center mx-4'>
      <img className='w-24 rounded-full mb-2' src={image2} alt="" />
      <h1 className='text-lg font-semibold'>Elon Musk</h1>
      <p className='text-sm'>Product Manager</p>
    </div>
    {/* তৃতীয় সদস্য */}
    <div className='flex flex-col items-center'>
      <img className='w-24 rounded-full mb-2' src={image1} alt="" />
      <h1 className='text-lg font-semibold'>Bill gaest</h1>
      <p className='text-sm'>Chief Operations Officer</p>
    </div>
  </div>
</div>
    );
};

export default BLogimg;