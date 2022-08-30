import React from "react";
import ImgLogo from "../images/90s_logo.png"
import styled from "styled-components";
function cartItems() {
    return []
  }

  const Logo = styled.img`
  width: 8%;
`;
const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: black;
padding: 10px;
`;
const Header = () =>{
    return(
        <HeaderContainer>
        <Logo src={ImgLogo} alt="90's shop logo" />
        <nav>
          <ul style={{listStyleType: 'none', display: 'flex'}}>
            <li><a href="/">Home</a></li>
            |
            <li><a href="/cart">Cart ({cartItems().length})</a></li>
          </ul>
        </nav>
        <hr/>
      </HeaderContainer>
    )
}

export default Header