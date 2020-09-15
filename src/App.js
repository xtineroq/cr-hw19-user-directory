import React from 'react';
import Table from './components/Table';
import Wrapper from './components/Wrapper';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
       <Wrapper>
         <Header />
         <Table />
       </Wrapper>
        </div>
    );
}

export default App;