import React from 'react'
import Header from './components/Header/Header';
// import pictureA from './images/a.jpg';
// import pictureB from './images/b.jpg';
import HomePage from './pages/HomePage';
import ProductA from './pages/products/ProductA';
import ProductB from './pages/products/ProductB';
import Cart from './pages/Cart';
import All from './pages/products/All';

function cartItems() {
  return []
}



function App() {
  return (
    <main>
     <Header />

      {
        window.location.pathname === '/' && (
          <HomePage />
          
        )
      }
     {
        window.location.pathname === '/products/all' && (
          <All />
          
        )
      }
      {
        window.location.pathname === '/products/a' && (
          <ProductA />
        )
      }
      {
        window.location.pathname === '/products/b' && (
          <ProductB />
        )
      }
      
      {
        window.location.pathname === '/cart' && (
          <Cart />
        )
      }
    </main>
  );
}

export default App;
