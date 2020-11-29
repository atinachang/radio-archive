import React, {Fragment} from 'react';

const Shows = ({shows})=> {
  return (
    <Fragment>
      <h1>Past Shows:</h1>

      <div className="ui five doubling stackable cards">

      <div className="ui four column grid">
        {shows.map(show => {
          console.log(show.iframe)
        return (
        <div key={show._id} className="column">
          <div className="ui fluid card">
            <div className="image">
            {/* <p dangerouslySetInnerHTML={{__html: show.iframe}}></p> */}
            <iframe width="100%" height="100%" src={show.iframe} frameborder="0" ></iframe> </div>
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
    </div>
    </Fragment>
  )
}

export default Shows