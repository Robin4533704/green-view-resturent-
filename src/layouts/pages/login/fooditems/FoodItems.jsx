import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navber from "../../../../Componets/navber/Navber"

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("/subscribe.Data.json")
      .then((res) => res.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Navber/>
       <h1 className="text-center p-6 text-3xl font-bold">Out Food list</h1>
        <div className="flex flex-wrap justify-center gap-4 shodow-2xl mx-4">
     
      {foodItems.map((item) => (
        <div key={item.id} className="card bg-base-100 w-96 shadow-sm">
          
          <figure>
            <img className="w-[350px]" src={item.thumbnail} alt={item.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
             
            </h2>
            <p className="font-bold">Category: {item.techCategory}</p>
            <p>Price: {item.price}</p>
            <p>Frequency: {item.frequency}</p>
            <div className="flex items-center justify-between pt-4 ">
              <Link className=" bg-red-500 text-white p-2 rounded-xl">{item.techCategory}</Link>
              <button className="bg-blue-400 text-white rounded-xl p-2">Order New</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default FoodItems;
