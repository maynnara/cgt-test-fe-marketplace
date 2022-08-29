import React from 'react'

const ProductB = () =>{
    return(
        <div>
            <h1>Product B</h1>
            <p>Price: 30 USD</p>

            <button onClick={() => console.warn('Not implemented!')}>
              Add to cart
            </button>

            {/* <div><img src={pictureB} width={640}/></div> */}
          </div>
    )
}

export default ProductB