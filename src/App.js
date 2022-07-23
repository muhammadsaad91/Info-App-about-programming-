import React from 'react';
import { useGlobalState } from './context';
import Search from './Search';

const App = () => {
  // <Search />
  const { state, next , prev, removed} = useGlobalState();
   
  
  const loading = state.loading;
  const clicked = () => {
    next();
  }
  const clicked1 = () => {
    prev();
  }
  

  if (loading) {
    return <div><h1>loading...</h1></div>;
  } 
  return (
    <>
    <Search/>
    <div>
      <button onClick={ clicked }>Next</button>
      <button onClick={ clicked1 }>Prev</button>
    {
      state.data.map((item, index) => {
        return <div key={index}>{item.title}
             <p>{item.author}</p>
             {/* <p>{item.points}</p> */}
              <p>comments ::{item.num_comments}</p>
              <p>{state.page}</p>
              <p>{state.nbpages}</p>
              <a href={item.url} target='blank' >Read more</a>
  <button onClick={ ()=>removed(item.objectID) }>Remove</button>              

              <p>-----------------</p>
        </div>
      }

      )


    }
    </div>
    </>
  )
}   

export default App;
