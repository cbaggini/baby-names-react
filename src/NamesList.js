import React from "react";
import BabyName from "./BabyName";


const NamesList = ({filteredNames, filterNames, setFilteredNames, babyNamesSorted, favorite, setFavorite, changeFavorite}) => {

	return (
	<>
	<div className="searchBar">
		<input type="text" onChange={filterNames} placeholder="Search for names..."></input>
	</div>
	<div className="names">
		{filteredNames.names.map((el) => <BabyName key={el.id} {... el} changeFavorite={changeFavorite}/>)}
	</div>
	</>
	);
}

export default NamesList;