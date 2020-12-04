// // === AddressBook.js
// import React, { useState, useEffect, useCallback, Fragment } from "react";
// import Shows from './Shows';
// import AddShow from './AddShow';

// const ArchivePage = ()=> {
// 	const [shows, setShows] = useState([])
// 	const [adding, setAdding] = useState(null)
// 	const refresh = useCallback(async () => {
// 		setAdding(null);
// 		try {
// 			const response = await fetch("/api/shows/add");
// 			const data = await response.json()
// 			console.log(data)
// 			setShows(data)
// 		} catch(e) {
// 			console.log(e)
// 		}
// 	}, []);

// 	useEffect(() => {
// 		refresh()
// 	}, [refresh]);
// 	const addShow = () => {
// 		setAdding("show")
// 	}

// 	return (
// 		<Fragment>
// 			{adding === "show" ? <AddShow onAdd={refresh} /> : null}

// 			{shows.map(show => {
// 				return <Shows key={show._id} {...shows}/>
// 			})}
// 		</Fragment>
// 	)
// }

// export default ArchivePage;