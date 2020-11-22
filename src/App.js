import {useEffect, useState} from 'react';
import Shows from './components/Shows';


const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      //GET shows
      const response = await fetch('http://localhost:5000/shows',
      {
        method: 'GET',
        headers,
      }
      );
      const data = await response.json()
      console.log(data);
    }
    fetchShows()
  }, [])
  return (
    <div className="ui container">
      <h1>
        Radio Archive
      </h1>
      			<h1>Past Shows:</h1>

      <div className="ui five doubling stackable cards">
        <Shows shows={shows}/>
        {/* <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows />
        <Shows /> */}

      </div>

    </div>
  );
}

export default App;
