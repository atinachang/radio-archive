import {useEffect, useState} from 'react';
import { Link, Route, Switch } from "react-router-dom";

import Shows from './components/Shows';
// import ArchivePage from './components/ArchivePage';
import axios from 'axios';
import Header from './components/Header'
import AddShow from './components/AddShow';


function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('/api/shows')
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
        <Route exact path="/" render={() => <Shows shows={shows}/>} />
      </Switch>
      </div>
  )
    }

export default App;
