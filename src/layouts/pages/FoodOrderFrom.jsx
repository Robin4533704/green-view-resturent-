import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import Loading from './Loading';

const FoodOrderForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(true);

  const foodData = [
    { "id": 1, "name": "Spicy Tuna Roll", "price": 9.99 },
    { "id": 2, "name": "Chicken Teriyaki", "price": 12.50 },
    { "id": 3, "name": "Classic Burger Box", "price": 14.00 },
    { "id": 4, "name": "Vegan Buddha Bowl", "price": 11.75 },
    { "id": 5, "name": "Butter Chicken Meal", "price": 13.25 },
    { "id": 6, "name": "Grilled Salmon Delight", "price": 16.99 },
    { "id": 7, "name": "Tofu Stir Fry", "price": 10.50 },
    { "id": 8, "name": "BBQ Rib Feast", "price": 18.00 },
    { "id": 9, "name": "Mushroom Risotto", "price": 12.90 },
    { "id": 10, "name": "Falafel Wrap Combo", "price": 9.25 },
    { "id": 11, "name": "Thai Green Curry", "price": 13.50 },
    { "id": 12, "name": "Beef Shawarma Bowl", "price": 14.75 },
    { "id": 13, "name": "Mediterranean Platter", "price": 15.00 },
    { "id": 14, "name": "Mac & Cheese Bites", "price": 8.49 },
    { "id": 15, "name": "Paneer Tikka Wrap", "price": 11.00 },
    { "id": 16, "name": "Korean Bibimbap", "price": 13.25 },
    { "id": 17, "name": "Eggplant Parmesan", "price": 10.99 },
    { "id": 18, "name": "Shrimp Tacos", "price": 12.60 },
    { "id": 19, "name": "Stuffed Bell Peppers", "price": 11.80 },
    { "id": 20, "name": "Creamy Spinach Pasta", "price": 13.10 }
  ];

  const foodId = parseInt(id);
  const selectedFood = foodData.find(food => food.id === foodId);

  useEffect(() => {
    const foodId = parseInt(id);
    const selected = foodData.find(food => food.id === foodId);
    if (selected) {
      setFoodName(selected.name);
      
    }
    setLoading(false);
  },[id]);

  if (loading) return <Loading />;
  if (!selectedFood) return <div>Food not found</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPrice = (quantity * selectedFood.price).toFixed(2);
    swal({
      title: 'অর্ডার সফল!',
      text: `${foodName} - পরিমাণ: ${quantity} - মূল্য: ${totalPrice} - তারিখ: ${date}`,
      icon: 'success',
      button: 'ঠিক আছে',
    }).then(() => {
      toast("Your Order successful!");
      setTimeout(() => {
        navigate('/');
      }, 3500);
    });
  };

  const totalPrice = (quantity * selectedFood.price).toFixed(2);

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">খাবার অর্ডার করুন</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-gray-600 text-sm">Chooice Our Food</label>
          <input
            type="text"
            className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
            value={foodName}
            readOnly
          />
        </div>

        <div>
          <label className="text-gray-600 text-sm">Price</label>
          <input
            type="text"
            className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
            value={`${selectedFood.price.toFixed(2)}`}
            readOnly
          />
        </div>

        <div>
          <label className="text-gray-600 text-sm">Quantity</label>
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
          <label className="text-gray-600 text-sm">Total Price</label>
          <input
            type="text"
            className="w-full p-3 mt-1 rounded bg-gray-100 outline-none"
            value={`${totalPrice}`}
            readOnly
          />
        </div>

        <ToastContainer />

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
        >
          Confirm
        </button>
      </form>
    </div>
  );
};

export default FoodOrderForm;
