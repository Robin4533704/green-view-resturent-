import { use } from "react";

const subscribePromise = fetch("/public/subscribe.Data.json")
.then(res =>res.json())
const FoodItems = () => {
const fooditems = use(subscribePromise);
console.log(fooditems);
  return (
   <div>
    <h1>hello food items</h1>
   </div>
  );
};

export default FoodItems;