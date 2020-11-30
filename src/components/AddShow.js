import React, {Fragment, useState} from 'react';

import Field from './Field';

const AddShow = (props) => {
	const [host, setHost] = useState("");
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("YYYY-MM-DD");
	const [iframe, setIframe] = useState("");
	const [tags, setTags] = useState("");


const addRecord = async e => {
 e.preventDefault();
 try {
   const response = await fetch("/api/shows/add", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     // Add address here:
     body: JSON.stringify({ host, description, date, iframe, tags})
	 });
      if (response.ok) {
        props.onAdd();
      } else {
        console.log("Error when saving record");
      }
    } catch (e) {
      console.log(e);
		}
	} 
	
	
	return (
		<Fragment>
			<form onSubmit={addRecord}>
				<div className="ui equal width form">
					<div className="fields">
				<Field
				label="Host Name"
				value={host}
				name="host name"
				onChange={e =>
				setHost(e.target.value)
				}
				/>
				<Field
				label="Description"
				value={description}
				name="description"
				onChange={e => setDescription(e.target.value)}
				/>
				</div>
				<div className="fields">
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
				placeholder="link from picture widget"
				onChange={e => setIframe(e.target.value)}
				/>
				<Field
				label="tags"
				value={tags}
				name="tag"
				onChange={e => setTags(e.target.value)}
				/>
				</div>
				</div>
				<input className="ui button" type="submit" value="Save" />
			</form>
		</Fragment>
	)
}

export default AddShow;