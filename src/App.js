import {useEffect, useState} from 'react';
import { Link, Route, Switch } from "react-router-dom";

import Shows from './components/Shows';
import axios from 'axios';
import Header from './components/Header'
import AddShow from './components/AddShow';


function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/shows')
    .then(res => {
      setShows(res.data)
    })

  },
   [])
  return (
    <div className="ui container">
      {/* <Router>
        <Route path="/upload" component={Header}/>
      </Router> */}
      <Header />

      <Switch>
        <Route path="/upload" component={AddShow}/>        
      </Switch>
        <Shows shows={shows}/>
      </div>
  )
    }

export default App;
