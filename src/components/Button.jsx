import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
padding: 10px;
    background-color: #9b3fef;
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: uppercase;
    border: none;
`;

const AddToCartButton = () =>{
 return(
    <>
    <StyledButton onClick={() => console.warn('Not implemented!')}>
              Add to cart
    </StyledButton>
    </>
 )
}

export default AddToCartButton