import React from 'react';
import Table from './components/Table';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Container from './components/Container';

function App() {
  return (
      <div className="App">
      <Wrapper>
        <Header />
        <Container />
        <Table />
      </Wrapper>
      </div>
  );
}

export default App;