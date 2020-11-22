

const Shows = ({shows})=> {
  return (
    <div>
      {shows.map(show => {
        return (
          <div key={show._id}>
            <p>{show.host}</p>
          </div>
        )
      })}
    </div>
  )
}

// const placeholder = ({name, description, date, link}) => {
// 	return (
//   <div className="ui card">
//     <div className="image">
//       <div className="ui placeholder">
//         <div className="square image"></div>
//       </div>
//     </div>
//     <div className="content">
//       <div className="ui placeholder">
//         <div className="header">
//           <div className="very short line">name</div>
//           <div className="medium line">date</div>
//         </div>
//         <div className="paragraph">
//           <div className="short line">description</div>
//         </div>
//       </div>
//     </div>
//   </div>

// 	)
// }
// const Archive = () => {
// 	return (
// 		<Fragment>
// 		{/* {placeholder()} */}
//     {Shows()}
// 		</Fragment>
// 	)
// }

export default Shows