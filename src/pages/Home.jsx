import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
font-weight: bold;
text-align: center;
font-size: 2rem;
`;


const Home= () => (
    <>
      <div>
        <StyledTitle>
        Welcome to our shop!
        </StyledTitle>
            

            <h3>
              You are probably interested in <a href="/products/a">A</a>.
            </h3>

            <h3>
              Check out the newest product <a href="/products/b">B</a>!
            </h3>
          </div>
    </>
)

export default Home