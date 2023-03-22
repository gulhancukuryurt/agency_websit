import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
        height: 50px;
        
`
const Wrapper = styled.div`
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #B0C4DE;

`
const Logo = styled.div`
   img {
    width: 65px;
    margin: 10px;
    
   }
`
const Menu = styled.div`
   display:flex;
   flex-direction: row;
   justify-content: center;
   
   @media only screen and (max-width:480px) {
     display:none;
   }
   @media only screen and (max-width:1024px) {
     display:none;
   }
   
`
const MenuItem = styled.div`
      padding: 15px;
      font-size: 22px;
      margin-top: 10px;
      color: #19404d;
      
`

const Button = styled.button `
    height: 40px;
    width: 150px;
    margin-top: 20px;
    padding: 5px;
    background-color: #95d2e4;
    border: 3px solid #529898 ;
    border-radius: 20px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    @media only screen and (max-width:480px) {
        height: 40px;
        width: 80px;
   }
` 

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Logo><img src='https://cdn-icons-png.flaticon.com/512/1260/1260218.png'></img>
                </Logo>
                    <Menu>
                       
                        <MenuItem>Home</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Services</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>Contact</MenuItem>
                     
                        
                    </Menu>
                    <Button>Join Us</Button>
            </Wrapper>
        </Container>
    )
}

export default Navbar