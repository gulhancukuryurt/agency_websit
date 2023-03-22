import React from 'react'
import styled from 'styled-components'
import website from '../components/img/website.png'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`
   display: flex;
   @media only screen and (max-width:480px) {
     flex-direction: column;
   }
`

const Left = styled.div`
   width: 50%;
   @media only screen and (max-width:480px) {
     display:none;
   }
`

const Image = styled.img`
    margin-top: 150px;
    width: 100%;
    
`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width:480px) {
           width: 100%;
   }

`
const Title = styled.div`
    font-size: 60px;
    margin-top: 100px;
    @media only screen and (max-width:480px) {
           margin-top: 30px;
           font-size: 50px;

   }
`
const SubTitle = styled.div`
    font-size: 35px;
    font-style: italic;
    color: #333;
    margin-top: 15px;
    @media only screen and (max-width:480px) {
           text-align: center;
           font-size: 25px;

   }
`

const Desc = styled.p`
    font-size: 20px;
    width: 80%;
    margin-bottom: 30px;
    @media only screen and (max-width:480px) {
           text-align: center;
           font-size: 18px;
           margin-bottom: 20px;

   }
`

const Button = styled.button`
      padding: 20px;
      width: 200px;
      border: none;
      background-color: #B0C4DE;
      color: black;
      cursor: pointer;
      font-weight: bold;
      font-size: 15px;
      border-radius: 20px;
      @media only screen and (max-width:480px) {
           width: 150px;
           margin-bottom: 20px;
           padding: 15px;
   }
      `
      

const Feature = () => {
  return (
    <Container>
     <Left>
    <Image src={website}></Image>
     </Left>
     <Right>
        <Title>
            <b>good</b> design <br/>
            <b>good</b> website 
        </Title>
        <SubTitle>
        Lorem ipsum dolor sit amet consectetur.
        </SubTitle>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia soluta velit cum culpa molestias quaerat adipisci, magnam recusandae laborum, eos accusamus similique a magni rem quasi doloremque libero, necessitatibus dolore fugiat sunt optio. Odit quos dicta rem amet! Labore.
        </Desc>
        <Button>Learn More</Button>
     </Right>
     <AnimatedShapes/>
    </Container>
  )
}

export default Feature