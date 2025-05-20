import React from 'react';
import Food from '../card/Food';
import { useLoaderData } from 'react-router-dom';

import FoodCard from '../FoodCard';

const FoodList = () => {
 const foodlist= useLoaderData();
  console.log("Loaded foodlist:", foodlist); // ✅ চেক করো এখানে কী আসছে

  if (!Array.isArray(foodlist)) {
    return <p className="text-red-500 text-center">⚠️ ডেটা সঠিকভাবে লোড হয়নি।</p>;
  }
    return (
      <div>
        <h1 className='text-center mt-24 lg:mb-12 md:mb-12 m-6  text-4xl font-bold'>Italiyan Food</h1>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2">
      {foodlist.map(item => (
        <FoodCard key={item.id} foodcategory={item} />
      ))}
    </div>
      </div>
    );
};



export default FoodList;
