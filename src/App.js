import React from 'react';
import styled from 'styled-components';
import {useEffect,useState} from "react"
import {useSelector,useDispatch} from "react-redux"
import {fetchAdvice} from "./features/AdviceSlice"

function App() {
  const [click,setClick] = useState()
  const dispatch = useDispatch();
  const state = useSelector(state => state.advice)
  console.log(state)
  const {id,advice}=state.data
  useEffect(() => {
    dispatch(fetchAdvice())
  },[click])
  function handleClick(){
      setClick(!click)
  }
  return (
    <Container>
      {state.loading && <div style={{color: 'white',fontSize:"3rem"}}>Loading.....</div>}
      {!state && (state.error && <div style={{color: 'red'}}>Error: {state.error}</div>)}
      {
        !state.loading && 
        <Box>
          <h5>Advice #{id}</h5>
          <p>"{advice}"</p>
          <div className="dice">
            <img onClick={handleClick} src="/images/icon-dice.svg" alt="icon"></img>
          </div>
        </Box>
      }

    
    </Container>
  );
}

const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
background-color:hsl(218, 23%, 16%);
height:100vh;
width:100vw;
`;
const Box = styled.div`
display:flex;
flex-direction: column;
align-items: center;
background-color:hsl(217, 19%, 24%);
width: 32rem;
min-width: 15rem;
min-height:10rem;
max-height:35rem;
border-radius: 1rem;
text-align: center;
font-family:"Manrope", sans-serif;
padding:1.5rem 1.5rem 2.7rem 1.5rem;
position: relative;
@media (max-width: 760px){
  width:80%;
  padding:0.5rem 1rem 1.7rem 1rem;
  min-height:10%;
  max-height:80%;
}
h5{
  color:hsl(150, 100%, 66%);
  margin:1rem;
}
p{
  color:rgba(255, 255, 255,1);
  font-size: 2rem;
  margin:0.3rem;
  position:relative;
  &::after{
    content:url("./images/pattern-divider-desktop.svg");

  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    max-width:100%;
    padding-bottom: 0.5rem;
    
    &::after{
      content:url("./images/pattern-divider-mobile.svg");

    }


    
  }
}
.dice{
  height:3.3rem;
  width:3.3rem;
  background-color:hsl(150, 100%, 66%);
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius:50%;
  position:absolute;
  bottom:-1.56em;
  &:hover{
    box-shadow:0 0 1.2rem hsl(150, 100%, 66%);
  }
}
`

export default App;
