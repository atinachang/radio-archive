import React, {Fragment, useState} from 'react';

import Field from './Field';

const AddShow = (props) => {
	const [host, setHost] = useState("");
	const [desc, setDesc] = useState("");
	const [date, setDate] = useState(Date.now());
	const [iframe, setIframe] = useState("");
	const [tags, setTags] = useState("");

	const addShow = (e) => {
		e.preventtDefault();
    // try {
    //   const response = await fetch("/api/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ host, desc, date, iframe, tags })
    //   });
    //   if (response.ok) {
    //     props.onAdd();
    //   } else {
    //     console.log("Error when saving record");
    //   }
    // } catch (e) {
    //   console.log(e);
		// }	
	}

	return (
		<Fragment>
			<form onSubmit={addShow}>
				<Field 
					label="Host Name"
          value={host}
          name="host name"
          onChange={e => setHost(e.target.value)}
				/>
				<Field 
					label="Description"
          value={desc}
          name="description"
          onChange={e => setDesc(e.target.value)}
				/>
				<Field 
					label="Date"
          value={date}
          name="Date"
          onChange={e => setDate(e.target.value)}
				/>
				<Field 
					label="File Link"
          value={iframe}
					name="file link"
					placeholder="mixcloud - Picture Widget"
          onChange={e => setIframe(e.target.value)}
				/>
			<Field 
					label="tags"
          value={tags}
          name="tag"
          onChange={e => setTags(e.target.value)}
				/>
			</form>
		</Fragment>
	)
}

export default AddShow;