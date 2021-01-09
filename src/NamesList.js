import React from "react";
import BabyName from "./BabyName";
import SearchBar from "./SearchBar";


const NamesList = ({filteredNames, filterNames, changeFavorite, toggleGenders}) => {

	return (
	<>
	<SearchBar filterNames={filterNames} toggleGenders={toggleGenders}/>
	<div className="names">
		{filteredNames.names.map((el) => <BabyName key={el.id} {... el} changeFavorite={changeFavorite}/>)}
	</div>
	</>
	);
}

export default NamesList;