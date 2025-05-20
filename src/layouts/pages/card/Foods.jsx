
import React from 'react';

import { FaDove } from 'react-icons/fa';
import Food from './Food';

const Foods = ({ data }) => {
  
  if (!Array.isArray(data)) {
    return ; 
  }

  return (
   <div>
    <h1 className='text-4xl font-bold text-center p-6 '>Italiyan Foods</h1>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 '>
     
      {data.map((foodcategory) => (
        <Food key={foodcategory.id} foodcategory={foodcategory}></Food>
      ))}
     
    </div>
   </div>
  );
};

export default Foods;