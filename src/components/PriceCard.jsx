import React from 'react'
import styled from 'styled-components'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
      background-color: #e3e6f3;
      width: 400px;
      height: 600px;
      display: grid;
      grid-template-columns: repeat(3, 200px);
      margin: 30px;
      margin-top: 130px;
      border: 5px solid #405066;
      border-radius: 40px;
      box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.3);
      @media only screen and (max-width:480px) {
        width: 260px;
        height: 400px;
        margin-top: 70px;
        margin: 30px;

   }
   @media only screen and (max-width:1024px) {
        width: 280px;
        height: 400px;
        margin-top: 70px;
        margin: 30px;

   }
`
const PriceContainer = styled.div`
     width: 360px;
     display: flex;
     flex-direction: column;
     padding: 20px;
     align-items: center;
     @media only screen and (max-width:480px) {
        width: 225px;
   }
   @media only screen and (max-width:1024px) {
    width: 240px;

   }

`

const Type = styled.div`
   font-size: 40px;
   text-align: center;
   margin-top: 25px;
   color: #0d478a;
   padding: 10px;
   border-bottom: 2px solid black;
   @media only screen and (max-width:480px) {
    font-size: 25px;
    margin-top: 2px;
    border-bottom: 1px solid black;

   }
   @media only screen and (max-width:1024px) {
    font-size: 23px;
    margin-top: 2px;
    border-bottom: 1px solid black;

   }
`

const Price = styled.div` 
  font-size: 25px;
  width: 200px;
  text-align: center;
  background-color: #ad5a5a;
  border: none;
  border-radius: 10px;
  padding: 15px;
  color: white;
  margin-top: 25px;
  @media only screen and (max-width:480px) {
    font-size: 20px;
    margin-top: 10px;
    padding: 10px;
    width: 140px;

   }
 
   @media only screen and (max-width:1024px) {
    font-size: 15px;
    margin-top: 10px;
    padding: 10px;
    width: 100px;
   }
`


const List = styled.div``

const ListItem = styled.div`
font-size: 18px;
margin-top: 45px;
font-style:italic;
padding: 2px;
margin-bottom: 40px;
@media only screen and (max-width:480px) {
  font-size: 14px;
  margin-top: 20px;
  padding: 1px;
  margin-bottom: 30px;


   }

   @media only screen and (max-width:1024px) {
    font-size: 17px;
    margin-top: 20px;
    padding: 1px;
    margin-bottom: 30px;
   }
`

const Button = styled.button`
    background-color: #405066;
    border: none;
    width: 60%;
    padding: 10px;
    border-radius: 20px;
    font-size: 16px;
    cursor: pointer;
    color: white;
    font-weight: bold;
    
`


const PriceCard = ({price, type}) => {
  return (
  <Container>
    <PriceContainer>
       <Type>
          {type} Plan
       </Type>
       <Price>
        ${price}/Month
       </Price>
       <List>
        <ListItem>Lorem, ipsum dolor.</ListItem>
        <ListItem>Lorem, ipsum dolor.</ListItem>
        <ListItem>Lorem, ipsum dolor.</ListItem>
        <ListItem>Lorem, ipsum dolor.</ListItem>
       </List>
       <Button>Buy Now</Button>
    </PriceContainer>
    <AnimatedShapes/>
  </Container>
  )
}

export default PriceCard