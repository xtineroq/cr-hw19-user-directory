import React from 'react';
import Table from './components/Table';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Filters from './components/Filters';
import API from "./utils/API";

function App() {

  const employees = API.getUsers();

  return (
    <Wrapper>
      <Header />
      <Filters employees={employees}/>
      <Table employees={employees}/>
    </Wrapper>
  );
}

export default App;