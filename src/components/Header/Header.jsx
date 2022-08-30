import React from 'react'
import styled from 'styled-components';

const Logo = styled.img`
width: 6%;
`;

const StyledHeader = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


function cartItems() {
    return []
  }

function Header() {
    return(
        <StyledHeader>
            <Logo src="90s_logo.png" alt="logo" className="brand-logo" />
            <nav style={{display: 'flex'}}>
            <ul style={{listStyleType: 'none', display: 'flex'}}>
                <li><a href="/">Home</a></li>
                <li><a href="/products/all">Products</a></li>
            </ul>
            <ul style={{listStyleType: 'none', display: 'flex'}}>
                <li><a href="/cart">Cart ({cartItems().length})</a></li>
            </ul>
            </nav>
            <hr/>
        </StyledHeader>
    )
}

export default Header;