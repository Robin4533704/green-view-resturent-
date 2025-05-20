import React from 'react';
import image from "../assets/image/WhatsApp Image 2024-12-24 at 12.33.16_6bba692d.jpg";
import image1 from "../assets/image/download11.webp";
import image2 from "../assets/image/download 12.jpeg";

const BLogimg = () => {
  return (
    <div className="p-6 md:p-24 bg-black text-center rounded-2xl text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Meet Our Team</h1>
      <div className="bg-orange-300 p-6 gap-6 md:gap-12 flex flex-col md:flex-row justify-center items-center rounded-2xl">
        {/* সদস্য ১ */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={image} alt="Robin" />
          <h2 className="text-lg font-semibold">MD: Robin</h2>
          <p className="text-sm">CEO & Founder</p>
        </div>
        {/* সদস্য ২ */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={image2} alt="Elon Musk" />
          <h2 className="text-lg font-semibold">Elon Musk</h2>
          <p className="text-sm">Product Manager</p>
        </div>
        {/* সদস্য ৩ */}
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 rounded-full mb-2 object-cover" src={image1} alt="Bill Gates" />
          <h2 className="text-lg font-semibold">Bill Gates</h2>
          <p className="text-sm">Chief Operations Officer</p>
        </div>
      </div>
    </div>
  );
};

export default BLogimg;
