import React from 'react';
import Search from './components/Search';
import Prnx from './components/Prnx';
import Area from './components/Area';
import "./index.css"

const App = () => {
  // <Search />

  return (
    <div className='Main-c'>
      <Search />
      <br></br>
      <Prnx />
      <Area />
    </div>
  )
}

export default App;