
import { Link } from 'react-router-dom';
const Banner = () => {
  
  return (
   <div>
   
     <div
  className=" hero min-h-screen "
  style={{
    backgroundImage:
      "url(/imges/pexels-photo-1267320.jpeg)",
  }}
>
    
  <div className="hero-overlay">


  </div>
  <div className="md:mt-4 ml-4 ">
    <div className="text-white -mt-[250px] md:mt-[40px] ">
      <h1 className="mb-5 text-5xl  font-bold "><span className='text-green-500'>Green</span> <span className='text-yellow-400'>View</span >Resturent<br />fresh sushi and sashimi.</h1>
      <p className="mb-5 text-white">
      Best restaurants in Green view: A unique experience in the world <br /> of taste Best restaurants in Dhaka: A unique experience in the world of taste
      </p>
      <Link to="/foodlist"><button className="btn btn-primary mx-auto">Get Started</button></Link>
    </div>
    <div>
     
    </div>
  </div>
</div>
   </div>

  );
};

export default Banner;
