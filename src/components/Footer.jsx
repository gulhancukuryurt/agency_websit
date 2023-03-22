import React from 'react'
import styled from 'styled-components'
import { InstagramAlt } from '@styled-icons/boxicons-logos'
import { Twitter } from '@styled-icons/boxicons-logos'
import { Youtube } from '@styled-icons/boxicons-logos'
import { TelephoneFill } from '@styled-icons/bootstrap'
import { Address } from '@styled-icons/entypo'



const Container = styled.div`
  height: 150px;
  background-color: #B0C4DE;
  color: #0d2c3a;
  
`

const Wrapper = styled.div`
      width:100%;
      display:flex;
      justify-content:space-between;
    
`

const List = styled.ul`
   width: 15%;
   @media only screen and (max-width:480px) {
    width: 20%;
    margin-left: -35px;
          }
`
const ListItem = styled.li`
   color: #362816;
   list-style-type: none;
   padding: 7px;
   @media only screen and (max-width:480px) {
    padding: 5px;

          }
`

const SocialMedia = styled.div`
      width: 140px;
      height: 140px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding:10px;
      @media only screen and (max-width:480px) {
        padding:25px;
        width: 100px;
        height: 100px;
        margin-left: 35px;
        flex-direction: column;


          }
`
const Contact = styled.div`
       width: 200px;
       height: 100px;
       display: flex;
       flex-direction: column;
       align-items:center;
       margin:20px;
`
const TelephoneDiv = styled.div`
      display: flex;
`
const Telephone1 = styled(TelephoneFill)`
  margin-top: 15px;
  margin-bottom: 25px;
  color:#ad5a5a;
  width:30px;
  margin-right: 5px;
      @media only screen and (max-width:480px) {
        width:20px;
        margin-right: 6px;
          }
`

const Tel = styled.div`
     font-size: 14px;
     margin-top: 22px;
     @media only screen and (max-width:480px) {
      font-size: 12px;
      margin-top: 18px;
}
`
const AddressDiv = styled.div`
      display: flex;
`
const Address1 = styled(Address)`
  color:#ad5a5a;
  margin-bottom: 20px;
  width:35px;
  margin-right: 5px;
  @media only screen and (max-width:480px) {
    width:25px;
    

}
  
`
const Add = styled.div`
     font-size: 14px;
     margin-top:10px;
     @media only screen and (max-width:480px) {
      font-size: 12px;
      margin-top:8px;
    

}

`

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Features</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>Pricing</ListItem>
          <ListItem>Contact</ListItem>
        </List>

        <SocialMedia>
          <InstagramAlt></InstagramAlt>
          <Twitter></Twitter>
          <Youtube></Youtube>
        </SocialMedia>

        <Contact>
          <TelephoneDiv>
            <Telephone1></Telephone1>
            <Tel> 1122334455</Tel>
          </TelephoneDiv>

          <AddressDiv>
            <Address1></Address1>
            <Add> Address Add
            </Add>
          </AddressDiv>

        </Contact>
      </Wrapper>
    </Container>
  )
}

export default Footer