import React from 'react'

const ProductA = () =>{
    return(
        <div>
            <h1>Product A</h1>
            <p>Price: 10 USD</p>

            <button onClick={() => console.warn('Not implemented!')}>
              Add to cart
            </button>

            {/* <div><img src={pictureA} width={640}/></div> */}
          </div>
    )
}

export default ProductA