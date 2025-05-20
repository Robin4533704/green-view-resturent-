import React from 'react';
import Banner from '../../Componets/navber/banner/Banner';
  import { useLoaderData } from 'react-router-dom';
import Foods from './card/Foods';
// import FoodDetail from './FoodDetail';

const Home = () => {
 
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
     <Banner></Banner>
      <Foods data={data} />
      
    </div>
  );
};

export default Home;