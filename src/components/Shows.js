import React, {Fragment} from 'react';
import '../styles.css'

const Shows = ({shows})=> {
  return (
    <Fragment>
      <h1>Past Shows:</h1>

      <div className="container">
        {shows.map(show => {
          // console.log(show.iframe)
        return (
        <div key={show._id} className="card">
          <div className="ui fluid card">
            <div className="image">
            <iframe width="100%" height="100%" src={show.iframe} frameBorder="0" ></iframe> </div>
            <div className="content">
              <div className="header">{show.host}</div>
              <p style={{textTransform:"capitalize"}}>{show.description}</p>
              <div className="meta">
              <p>{show.tags}</p>
              </div>
            </div>
          </div>
        </div>
      )
      })}
      </div>
    </Fragment>
  )
}

export default Shows