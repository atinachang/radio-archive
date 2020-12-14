import '../styles.css'

const Shows = ({shows})=> {
const showsRev = shows.slice().reverse();

  return (
    <div className="shows-archive">
      <h1>Past Shows:</h1>

      <div className="container">
        {showsRev.map(show => {
          const date = new Date(show.date)
        return (
        <div key={show._id} className="card">
          <div className="ui fluid card">
            <div className="image">
            <iframe width="100%" height="100%" src={show.iframe} title={show._id}frameBorder="0" ></iframe> </div>
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