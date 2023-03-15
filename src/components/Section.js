import React from 'react'
import styled  from 'styled-components'

function Section() {
  return (
    <Wrap>
       <ItemText>
        <h1>Model S</h1>
        <p>Order Online for Touches Delivery</p>
       </ItemText>
       <ButtonGroup>
        <LeftButton>
          Custom Order
        </LeftButton>
        <RightButton>
          Existing Inventory
        </RightButton>
       </ButtonGroup>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/model-s.jpg');
` 
const ItemText = styled.div`
padding-top:15vh;
text-align: center;
`
const ButtonGroup =`


`

const LeftButton = styled.div`
    Background-color: rgba(123,28,32,0.8); 

`
const RightButton = styled(LeftButton)