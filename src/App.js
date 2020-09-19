import React, { useState} from 'react';
import Table from './components/Table';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Filters from './components/Filters';
import API from "./utils/API";

function App() {

  const employees = API.getUsers();

  const [results, setResults] = useState([]);

  return (
    <Wrapper>
      <Header />
      <Filters employees={employees} setResults={setResults}/>
      <Table employees={employees} results={results}/>
    </Wrapper>
  );
}

export default App;