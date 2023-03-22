import React from 'react'
import styled from 'styled-components'
import Services from '../components/img/services.png'
import AnimatedShapes from './AnimatedShapes'
import MiniCard from './MiniCard'

const Container = styled.div`
   display: flex;
   width: 100%;
   @media only screen and (max-width:480px) {
    flex-direction: column;

   }
`
const Left =styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px) {
      width: 100%;
      
   }
`

const Image = styled.img`
    width: 100%;
    margin-top: 120px;
    @media only screen and (max-width:480px) {
      margin-top: 50px;
      
   }
`

const Right = styled.div`
    width: 50%;
    display: flex;
    @media only screen and (max-width:480px) {
         width: 100%;
   }
`

const Wrapper = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     @media only screen and (max-width:480px) {
         width: 100%;
   }
`

const Title = styled.div`
    font-size: 50px;
    margin-top: 20px;
    font-weight: bold;
    @media only screen and (max-width:480px) {
      font-size: 30px;
      text-align: center;

      
   }
`

const Desc = styled.div`
  font-size: 20px;
  width: 80%;
  margin-top: 20px;
  @media only screen and (max-width:480px) {
    font-size: 18px;

   }
` 
const CardContainer = styled.div`
   display: flex;
   flex-direction: space-between;
   margin-top: 50px;
   @media only screen and (max-width:480px) {
    flex-direction: column;

   }
`

const Button = styled.button`
     width: 200px;
     padding: 20px;
     border: none;
     border-radius: 20px;
     background-color:#B0C4DE;
     color: black;
     font-weight: bold;
     margin-top: 10px;
     margin-right: 25px;
     cursor: pointer;
     font-size: 15px;

     @media only screen and (max-width:480px) {
       margin-bottom: 20px;
       width: 140px;
       font-size: 14px;

   }
`

const Service = () => {
  return (
    <Container>
        <Left>
         <Image src={Services}></Image>
        </Left>
        <Right>
            <Wrapper>
              <Title>
                Simple Proccess To Start
              </Title>
              <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nobis explicabo officia nisi qui itaque cupiditate minima architecto laborum tenetur nostrum natus eaque facere aperiam ab, commodi saepe voluptatum placeat consequatur. Reiciendis excepturi dignissimos aspernatur dolorem obcaecati aut, error veniam nisi iste dicta corporis commodi!
              </Desc>
              <CardContainer>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
              </CardContainer>
              <Button>How It Works?</Button>
            </Wrapper>
            
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Service