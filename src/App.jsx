// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//  import './App.css'
// import Footer from'./components/Footer'

//  import Header from './components/Header'
//  import Home from './pages/Home';
// import { Router } from 'react-router-dom'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     {/* <Router>
//     <div className="min-h-screen bg-base-200"></div> */}


//     <Header/>


//      <Footer/>
//        {/* </Router> */}
//     </>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import AllProducts from './pages/AllProducts';
import MyProducts from './pages/MyProducts';
import MyBids from './pages/MyBids';
import ProductDetails from './pages/ProductDetails';
import PostProduct from './pages/PostProduct';
import UpdateProduct from './pages/UpdateProduct';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-base-200">
        <Header />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* // <Route path="/register" element={<Register />} />
            // <Route path="/login" element={<Login />} />
            // <Route path="/all-products" element={<AllProducts />} />
            // <Route path="/my-products" element={<MyProducts />} />
            // <Route path="/my-bids" element={<MyBids />} />
            // <Route path="/products/:id" element={<ProductDetails />} />
            // <Route path="/post-product" element={<PostProduct />} />
            // <Route path="/update-product/:id" element={<UpdateProduct />} />
            // <Route path="*" element={<ErrorPage />} />  */}
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-base-200">
//         <Header />

//         <main className="container mx-auto p-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;