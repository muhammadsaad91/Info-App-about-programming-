import React from 'react';
import ReactDOM from 'react-dom';

const api= 'http://www.omdbapi.com/?apikey=a59ea735&s=batman';
const App = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setData(data.Search));
  }, []);



  return (
    <div>
      <h1>Batman Movies</h1>
      <ul>
        {data.map(item => (
          <li key={item.imdbID}>
            <h2>{item.Title}</h2>
            <p>{item.Year}</p>
            <img src={item.Poster} alt="poster" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
