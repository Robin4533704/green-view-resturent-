import React, { useState } from "react";

const FoodOrderForm = () => {
  const [food, setFood] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("this food no a moment");
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">খাবার অর্ডার করুন</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-gray-600 text-sm">Chooice Our Food</label>
          <input
            type="text"
            className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
            placeholder="Chooice your Food"
            value={food}
            onChange={(e) => setFood(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-gray-600 text-sm">Quantify</label>
          <input
            type="number"
            min="1"
            className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-gray-600 text-sm">অর্ডারের তারিখ</label>
          <input
            type="date"
            className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
        >Confirm </button>
      </form>
    </div>
  );
};

export default FoodOrderForm;