import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
const FoodDetails = () => {
  const {id}= useParams();
  const data=useLoaderData();
  const foodId=parseInt(id);
  const singleFood = data.find(food => food.id === foodId)
  
  const {banner,features,name,description,number_of_reviews,ratings,price,frequency,subscription_benefits,tech_category}=singleFood
  return (
    <div className='mb-10 mt-14 m-4'>
      
      <div className='flex flex-col lg:flex-row md:flex-col gap-8'>
        <div className='bg-gray-100 rounded-2xl md:pl-[220px]  lg:p-12'>
  <img className='w-[450px] h-[450px] rounded-2xl' src={banner} alt="" />
        </div>
      
          <div className='md:ml-6'>
        <h1 className='text-5xl pt-4 pb-4 font-bold'>{name}</h1>
        <p className='text-gray-400 border-y-2 border-dashed'>{tech_category}</p>
       <div className='text-orange-400  pt-4 pb-4'>
          {features.map((benefit, index) => (
    <li key={index}>{benefit}</li>
  ))}
  
       </div>
       <p className='font-bold pt-4 pb-4'>Description: <span className='text-gray-400'>{description}</span> </p>
    
      
      { subscription_benefits.map((subscrip, index) => (
    <button className='btn bg-secondary  text-white rounded-2xl' key={index}>{subscrip}</button>
  ))}
  <p className='border-b-2 border-indigo-500 pt-6'></p>
 <div className="pt-8 pb-8 space-y-3">
  <div className="flex justify-between border-b-2 border-dashed py-2 ">
    <p className="font-bold ">Price:</p>
    <p>${price}</p>
  </div>
  <div className="flex justify-between border-b-2 border-dashed py-2">
    <p className="font-bold">Reviews:</p>
    <p>{number_of_reviews}</p>
  </div>
  <div className="flex justify-between border-b-2 border-dashed py-2">
    <p className="font-bold">Category:</p>
    <p>{tech_category}</p>
  </div>
  <div className="flex justify-between border-b-2 border-dashed py-2">
    <p className="font-bold">Rating:</p>
    <p>{ratings}</p>
  </div>
  <div className="flex justify-between border-b-2 border-dashed py-2">
    <p className="font-bold">Customers available:</p>
    <p className="text-red-500">{frequency}</p>
  </div>
</div>

  <div>
    <Link to={`/foodorderfrom/${singleFood.id}`}><button className='btn bg-blue-400 text-white w-full text-center'>Order New</button></Link>
  </div>
       
      </div>
      </div>
    
    </div>
  );
};

export default FoodDetails;