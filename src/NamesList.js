import React from "react";
import BabyName from "./BabyName";


const NamesList = ({filteredNames, setFilteredNames, babyNamesSorted, favorite, setFavorite, changeFavorite}) => {

	const filterNames = (e) => {
		if (e.target.value) {
			const newNames = babyNamesSorted.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
			setFilteredNames(newNames);
		} else {
			setFilteredNames(babyNamesSorted);
		}	
	}

	return (
	<>
	<div className="searchBar">
		<input type="text" onChange={filterNames} placeholder="Search for names..."></input>
	</div>
	<div className="names">
		{filteredNames.map((el) => <BabyName key={el.id} {... el} changeFavorite={changeFavorite}/>)}
	</div>
	</>
	);
}

export default NamesList;