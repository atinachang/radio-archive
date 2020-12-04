import React, {Fragment, useState} from 'react';
import '../styles.css'
import Filter from './Filter';


const Shows = ({shows})=> {
  // const [shows, setShows] = useState([]);
  const [showFilter, setShowFilter] = useState('All')


    // Set filter in state for given input
  const filter = (e) => {
    setShowFilter(e.target.value);
  };

  //   let showsToRender = [];
  // shows.forEach((app) => {
  //   if (filter === "All") {
  //     showsToRender.push(app);
  //   } else {
  //     app.platforms.forEach((show) => {
  //       if (show[0] === filter) {
  //         showsToRender.push(app);
  //       }
  //     });
  //   }
  // });

  return (
    <div className="shows-archive">
      <h1>Past Shows:</h1>

        <Filter />
      <div className="container">
        {shows.map(show => {
          // console.log(show.date)
          const date = new Date(show.date)
          console.log(date)
        return (
        <div key={show._id} className="card">
          <div className="ui fluid card">
            <div className="image">
            <iframe width="100%" height="100%" src={show.iframe} frameBorder="0" ></iframe> </div>
            <div className="content">
              <div className="header">{show.host}</div>
              <p style={{textTransform:"capitalize"}}>{show.description}</p>
              <div className="meta">
              <p>{date.toDateString()}</p>
              <p>{show.tags}</p>
              </div>
            </div>
          </div>
        </div>
      )
      })}
      </div>
    </div>
  )
}

export default Shows