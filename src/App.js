import {useEffect, useState, useCallback} from 'react';
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from './components/Header'
import AddShow from './components/AddShow';
import Login from './components/Login';
import Shows from './components/Shows';
import Footer from './components/Footer';


function App() {
  const [shows, setShows] = useState([]);
  const [user, setUser] = useState(undefined);
  const home = '/radio-archive';

  const getShows = useCallback(async function() {
    try {
      const response = await fetch("/api/shows/", {
        headers: {
          credentials: 'include',
        },
      });
      console.log(response)
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }
      setShows(json);
    } catch (err) {
      setShows([]);
    }
  }, []);

  const getUser = useCallback(async function() {
    try {
      const response = await fetch("/api/users/me", {
        headers: {
          credentials: 'include',
        },
      });
      console.log(response)
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message);
      }

      setUser(json.data);
    } catch (err) {
      setUser(undefined);
    }
  }, []);

  useEffect(() => {
   getShows();
   getUser();
  },
   [getShows, getUser])



  return (
    
    <div className="ui container">

      <Header home={home}/>
        <Switch>
          
          {/* on intial render, show the Shows.js page with a log in button */}
        <Route exact path={home} component={() => <Shows shows={shows}/>} />

          {/* on login, i want the user to log in with admin creds. if successfully logged in, redirect to upload page */}
        <Route path={`${home}/login`}
        render={props => {
          if (!user) {
            return <Login getUser={getUser} {...props} />
          }
        return <Redirect to={`${home}/upload`} />
        }} />
        {/* once finished with upload page, redirect to Shows.js */}

        <Route path={`${home}/upload`} component={AddShow} />

        </Switch>
        <Footer />
      </div>
  )
    }

export default App;
