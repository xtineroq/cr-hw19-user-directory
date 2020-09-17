import React from 'react';
import Table from './components/Table';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Container from './components/Container';
import API from "./utils/API";

function App() {

  const employees = API.getUsers();

  return (
    <Wrapper>
      <Header />
      <Container />
      <Table employees={employees}/>
    </Wrapper>
  );
}

export default App;