import React from 'react'
import styled from 'styled-components'
import Img1 from '../components/img/img1.png'
import AnimatedShapes from './AnimatedShapes'
import start from '../components/img/start.png'

const Container = styled.div`
   height: calc(100vh - 50px);
   display: flex;
   @media only screen and (max-width:480px) {
     flex-direction: column;
   }
   
`

const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px) {
     width: 100%;
     height: 100%;
   }
   
`

const Title = styled.h1`
    width: 60%;
    font-size: 55px;
    @media only screen and (max-width:480px) {
     width: 100%;
    font-size: 50px;
    text-align: center;
   }
   
    
`
const Desc = styled.p`
    width: 60%;
    font-size: 20px;
`
const Info = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Button = styled.button`
     width: 200px;
     padding: 20px;
     border: none;
     border-radius: 20px;
     background-color:#B0C4DE;
     color: black;
     font-weight: bold;
     margin-right: 25px;
     cursor: pointer;
     margin-top: 10px;
     font-size: 15px;
     @media only screen and (max-width:480px) {
        background-color:#8da2bb;
        color:white;
   }
   

`

const Right = styled.div `
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow:hidden;

    @media only screen and (max-width:480px) {
     display:none;
   }
   
`

const Image = styled.img `
    width: 200%;
`


const Intro = () => {
  return (
    <Container>
<Left>
<Title>
    Advantures in creative age
</Title>
<Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Et quisquam earum eius, error rem quod cupiditate veniam eaque numquam distinctio!
</Desc>
<Info>
    <Button>Start Project!</Button>
</Info>
</Left>
<Right>
   <Image src={Img1}/>
</Right>
<AnimatedShapes/>
    </Container>
  )
}

export default Intro