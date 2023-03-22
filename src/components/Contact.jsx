import React from 'react'
import styled from 'styled-components'
import contact from '../components/img/contact.png'

const Container = styled.div`
    height: 90%;
    margin-top: 50px;
  
    `

const Image = styled.img`
    width: 50%;
    margin-left: -150px;
    @media only screen and (max-width:480px) {
     width: 50%;
     margin-left: -10px;
     z-index:1;
   }
`
const Wrapper = styled.div`
         width: 100%;
         display:flex;
         align-items: center;
         justify-content: center;
         @media only screen and (max-width:480px) {
         flex-direction: column;
        
   }
         
`
const FormContainer = styled.div`
          background-color: #b6e2fc;
          margin-top: -90px;
          padding: 15px;
          width: 500px;
          height: 500px;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          @media only screen and (max-width:480px) {
            margin-top: -65px;
            height: 400px;
            width: 300px;
            margin-bottom:50px;
   }

 
   @media only screen and (max-width:1024px) {
            margin-top: -55px;
            height: 400px;
            width: 400px;
            margin-bottom:50px;

   }

`
const Title = styled.div`
      text-align: center;
      font-size: 35px;
      color: #0d478a;
    
`
const Form = styled.form`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;
      

`
const Input = styled.input`
     width: 300px;
     height: 30px;
     margin: 15px;
     border: none;
     border-bottom: 2px solid #ad5a5a;
     background-color: transparent;
`
const TextArea = styled.textarea`
     width: 300px;
     height: 30px;
     margin: 15px;
     border: none;
     border-bottom: 2px solid #ad5a5a;
     background-color: transparent;
`
const Button = styled.button`
  width: 200px;
  padding: 8px;
  margin: 20px;
  background-color: #ad5a5a;
  border: none;
  font-size: 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

`

const Contact = () => {
    return (
        <Container>
           
            <Wrapper>
            <Image src={contact}></Image>
                <FormContainer>
                   <Title>Contact Us</Title> 
                    <Form>
                        <Input placeholder="Name-Surname"></Input>
                        <Input placeholder="Email Adress" type="email"></Input>
                        <TextArea placeholder="Message"></TextArea>
                        <Button>Send</Button>
                    </Form>
                   
                </FormContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact