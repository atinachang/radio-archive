import React from 'react';

const Filter = ({filter}) => {
	return (
		<select classNameName="ui dropdown"
		name="filter"
		id="filter"
		onChange={filter}
		>
		<option value="All">Filter by Category </option>
		<option value="hip-hop">hip-hop</option>
		<option value="afro">afro</option>
		<option value="club">club</option>
		<option value="house">house</option>
		<option value="talk">talk</option>
		<option value="bass">bass</option>
		</select>
	)
}

export default Filter;