import React from "react";

const SearchBar = ({filterNames, toggleGenders}) => {

	return (
	<div className="searchBar">
		<input type="text" onChange={filterNames} placeholder="Search for names..."></input>
		<button id="all" onClick={toggleGenders} className="mf selected">All</button>
		<button id="f" onClick={toggleGenders} className="f">Girls</button>
		<button id="m" onClick={toggleGenders} className="m">Boys</button>
	</div>
	);
};

export default SearchBar;