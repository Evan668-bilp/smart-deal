import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Welcome to SMART DEALS</h1>
          <p className="py-6">Your local marketplace for buying and selling with bids.</p>
          <Link to="/all-products" className="btn btn-primary">Browse Products</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;