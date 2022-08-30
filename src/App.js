import React from 'react'

//components
import Header from './components/Header'

//pages
import Home from './pages/Home'
import Cart from './pages/Cart'
import All from './pages/products/All'
import ProductA from './pages/products/ProductA'
import ProductB from './pages/products/ProductB'

function cartItems() {
  return []
}

function App() {
  return (
    <main>
      
    <Header />
      {
        window.location.pathname === '/' && (
          <Home />
          // <div>
          //   Welcome to our shop!

          //   <p>
          //     You are probably interested in <a href="/products/a">A</a>.
          //   </p>

          //   <p>
          //     Check out the newest product <a href="/products/b">B</a>!
          //   </p>
          // </div>
        )
      }
      {
        window.location.pathname === '/products/all' && (
          <All />
          // <div>
          //   <h1>Product A</h1>
          //   <p>Price: 10 USD</p>

          //   <button onClick={() => console.warn('Not implemented!')}>
          //     Add to cart
          //   </button>

          //   <div><img src={pictureA} width={640} alt="product A image" /></div>
          // </div>
        )
      }
      {
        window.location.pathname === '/products/a' && (
          <ProductA />
          // <div>
          //   <h1>Product A</h1>
          //   <p>Price: 10 USD</p>

          //   <button onClick={() => console.warn('Not implemented!')}>
          //     Add to cart
          //   </button>

          //   <div><img src={pictureA} width={640} alt="product A image" /></div>
          // </div>
        )
      }
      {
        window.location.pathname === '/products/b' && (
          <ProductB />
          // <div>
          //   <h1>Product B</h1>
          //   <p>Price: 30 USD</p>

          //   <button onClick={() => console.warn('Not implemented!')}>
          //     Add to cart
          //   </button>

          //   <div><img src={pictureB} width={640} alt="product A image" /></div>
          // </div>
        )
      }
      
      {
        window.location.pathname === '/cart' && (
          <Cart />
          // <div>
          //   Are you ready to purchase these?

          //   <ul>
          //     {cartItems().map((cartItem) => <li key={cartItem}>{cartItem}</li>)}
          //   </ul>
          // </div>
        )
      }
    </main>
  );
}

export default App;
