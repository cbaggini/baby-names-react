import React, {useState} from "react";
import BabyName from "./BabyName";
import babyNamesData from "./data/babyNamesData.json";

const NamesList = () => {
	const babyNamesSorted = babyNamesData.sort((a,b) => a.name > b.name);
	const [filteredNames, setFilteredNames] = useState(babyNamesSorted);

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
		<input type="text" onChange={filterNames}></input>
	</div>
	<div className="names">
		{filteredNames.map((el) => <BabyName key={el.id} {... el}/>)}
	</div>
	</>
	);
}

export default NamesList;