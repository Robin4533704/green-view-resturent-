import React, { Suspense } from 'react';
import FoodItems from '../login/fooditems/FoodItems';

const FoodCard = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
            <FoodItems/>
            </Suspense> 
        </div>
    );
};

export default FoodCard;