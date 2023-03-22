import React from 'react'
import styled, { css } from 'styled-components';
import Feature from './components/Feature';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Price from './components/Price';
import Service from './components/Service';
import Footer from './components/Footer';
import Contact from './components/Contact';


const Container = styled.div`
     
     position: relative;
     overflow-y:hidden;
     overflow-x:hidden;

 
`
const Shape = css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
   
    z-index: -1;
`


const IntoShape = styled.div`
    ${Shape}
    clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 45% 100%);
    background-color: #B0C4DE;
    
    
`
const FeatureShape = styled.div`
    ${Shape}
    clip-path: polygon(0 0, 45% 0%, 23% 100%, 0 100%);
    background-color: #DDA0DD;
`

const ServicesShape = styled.div`
    ${Shape}
 clip-path: polygon(0 0, 23% 0%, 43% 100%, 0 100%);    background-color: #FFE4C4;
    
    
`



function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServicesShape />
      </Container>
      <Container>
        <Price />
      </Container>
      <Container>
        <Contact />
      </Container>
      <Container>
        <Footer />
      </Container>


    </>
  );
}

export default App;
