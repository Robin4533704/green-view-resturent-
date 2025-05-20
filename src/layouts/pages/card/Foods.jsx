import React from 'react';
import Food from './Food';

const Foods = ({ data }) => {
  if (!Array.isArray(data)) return null;

  return (
    <section className="px-4 py-6 md:px-8 lg:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Italian Foods
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((foodcategory) => (
          <Food key={foodcategory.id} foodcategory={foodcategory} />
        ))}
      </div>
    </section>
  );
};

export default Foods;
