import React from 'react';
import './App.css';
import styled from 'styled-components'

import Cats from './components/Cats'


function App() {
  return (
    <div>
      <StyledApp>
        <h1>Purrrrrfecctttt 🐈</h1>
        <Cats />
      </StyledApp>
    </div>
  );
}
const StyledApp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`


export default App;
