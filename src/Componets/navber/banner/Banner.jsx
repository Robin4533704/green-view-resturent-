import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
     style={{
    backgroundImage:
       "url(/imges/pexels-photo-1267320.jpeg)",
   }}
    >
      <div className="absolute inset-0  bg-black opacity-60"></div>
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="text-green-500">Green</span>{' '}
          <span className="text-yellow-400">View</span> Restaurant
        </h1>
        <p className="text-white mb-6">
          Best restaurants in Green View: A unique experience in the world of taste.
          <br />
          Best restaurants in Dhaka: A unique experience in the world of taste.
        </p>
        <Link to="/foodlist">
          <button className="btn btn-primary">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;

