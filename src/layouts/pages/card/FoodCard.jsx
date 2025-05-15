import React, { Suspense } from 'react';

const FoodCard = () => {
    return (
        <div>
           <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
            
            </Suspense> 
        </div>
    );
};

export default FoodCard;