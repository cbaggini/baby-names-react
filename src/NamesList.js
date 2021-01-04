import React from "react";
import BabyName from "./BabyName";
import babyNamesData from "./data/babyNamesData.json";

const NamesList = () => {
	const babyNamesSorted = babyNamesData.sort((a,b) => a.name > b.name);
	return (
	<div className="names">
		{babyNamesSorted.map((el) => <BabyName {... el}/>)}
	</div>
	);
}

export default NamesList;