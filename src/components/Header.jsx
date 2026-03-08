import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { signOut } from 'firebase/auth';

const Header = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">SMART DEALS</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/all-products">All Products</Link></li>
          {user && <li><Link to="/my-products">My Products</Link></li>}
          {user && <li><Link to="/my-bids">My Bids</Link></li>}
          {user && <li><Link to="/post-product">Post Product</Link></li>}
          {!user ? (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          ) : (
            <li><button onClick={handleLogout} className="btn btn-ghost">Logout</button></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;