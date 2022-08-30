import React from 'react'
import AddToCartButton from '../../components/Button'
import PictureA from '../../images/a.jpg'
const ProductA= () => (
    <>
      <div>
            <h1>Product A</h1>
            <p>Price: 10 USD</p>

            <AddToCartButton />

            <div><img src={PictureA} width={640} alt="product A image" /></div>
          </div>
    </>
)

export default ProductA