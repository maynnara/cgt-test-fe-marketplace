import React from 'react'
import AddToCartButton from '../../components/Button'
import PictureB from '../../images/b.jpg'

const ProductB= () => (
    <div>
            <h1>Product B</h1>
            <p>Price: 30 USD</p>

            <AddToCartButton />

            <div><img src={PictureB} width={640} alt="product A image" /></div>
          </div>
)

export default ProductB