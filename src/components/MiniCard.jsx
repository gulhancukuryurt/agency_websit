import React from 'react'
import styled from 'styled-components'
import Question from '../components/img/qa.png'

const Container = styled.div`
    width: 100px;
    height: 120px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid #B0C4DE;
    border-radius: 20px;
    margin: 15px;
    box-shadow: 0px 25px 80px rgba(0, 0, 0, 0.3);
    @media only screen and (max-width:480px) {
       width: 140px;
       background-color: #dffafa;
       
   }
`
const Image = styled.img `
     width: 50px;
     margin-top: -70px;
     margin-bottom: 30px;
     @media only screen and (max-width:480px) {
      margin-top: -90px;

       
   }
`

const Text = styled.div`
      font-size: 16px;
      text-align: center;

`


const MiniCard = () => {
  return (
    <Container>
        <Image src={Question}>

        </Image>
        <Text>
       Lorem ipsum dolor sit amet consectetur.
        </Text>
    </Container>
  )
}

export default MiniCard