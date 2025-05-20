// layouts/pages/card/FoodCard.jsx
import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FoodCard = ({ foodcategory }) => {
  const { thumbnail, id, name, description, ratings, price, frequency, subscription_benefits } = foodcategory;

  return (
    <div className="card bg-base-100 border shadow">
      <figure className='bg-blue-100 p-6'>
        <img className='h-[230px] rounded-2xl' src={thumbnail} alt={name} />
      </figure>
      <div className="card-body bg-gray-200">
       <div className='flex items-center gap-2'>
        <img className='w-12 h-12  rounded-full' src={thumbnail} alt="" />
         <h2 className="card-title">
          {name}
          
        </h2>
       </div>
        <p>{description}</p>

        <div className="flex justify-between border-y-2 border-dashed items-center mt-3 px-4 mb-2">
          <span className="text-green-600 font-semibold">${price}</span>
          <div><p>{frequency}</p></div>
          <div className="flex items-center text-yellow-500">
            <span className="text-sm font-medium">{ratings}</span><FaRegStar />
          </div>
        </div>

        <ul className="list-disc pl-5 text-sm text-gray-600">
          {subscription_benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>

        <Link to={`/fooddetails/${id}`} className='btn bg-blue-500 w-full text-white'>
          View More
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
