import React from 'react'
import styled from 'styled-components'

const BigCircle3 = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background-color: #ec90b6;
  opacity: 0.2;
  position: absolute;
  top: 50px;
  left: -90px;
  z-index: -1;
  animation: circle 15s linear alternate infinite;
  @keyframes circle {
    to {
        transform: translate(100vw, 100vh);
    }
  }
` 

const BigCircle2 = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #6ab9d1;
  opacity: 0.2;
  position: absolute;
  top: 190px;
  left: -990px;
  z-index: -1;
  animation: circle 20s linear alternate infinite;
  @keyframes circle {
    to {
        transform: translate(100vw, 100vh);
    }
  }
` 


const BigCircle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: #641e85;
  opacity: 0.2;
  position: absolute;
  top: 10px;
  left: -690px;
  z-index: -1;
  animation: circle 25s linear alternate infinite;
  @keyframes circle {
    to {
        transform: translate(100vw, 100vh);
    }
  }
`


const AnimatedShapes = () => {
  return (
    <>
      <BigCircle3/> 
      <BigCircle2/> 
      <BigCircle/> 
    </>
  )
}

export default AnimatedShapes