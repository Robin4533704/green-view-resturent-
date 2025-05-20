import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const FoodCard = ({ foodcategory }) => {
  if (!foodcategory) return null;
  const { thumbnail, id, name, description, ratings, price, frequency, subscription_benefits } = foodcategory;

  return (
    <div className="m-4 max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <figure className="bg-blue-100">
        <img
          className="w-full h-48 object-cover"
          src={thumbnail}
          alt={name}
        />
      </figure>
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src={thumbnail}
            alt={name}
          />
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center border-t border-b border-gray-200 py-2 text-sm text-gray-700">
          <span className="text-green-600 font-semibold">${price}</span>
          <span>{frequency}</span>
          <div className="flex items-center text-yellow-500">
            <span className="mr-1">{ratings}</span>
            <FaRegStar />
          </div>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-4 space-y-1">
          {subscription_benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
        <Link to={`/fooddetails/${id}`}>
          <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
