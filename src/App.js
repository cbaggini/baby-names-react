import './App.css';
import React, {useState} from 'react';
import NamesList from "./NamesList";
import FavoriteNames from './FavoriteNames';

import babyNamesData from "./data/babyNamesData.json";

function App() {
	const babyNamesSorted = babyNamesData.sort((a,b) => a.name > b.name);
	const [filteredNames, setFilteredNames] = useState(babyNamesSorted);
	const [favorite, setFavorite] = useState([]);

	const changeFavorite = (e) => {
		e.preventDefault();
		const selectedName = babyNamesSorted.filter(el => el.name === e.target.textContent);
		if (selectedName.length === 0) {
			console.log("error")
			return null
		}
		const isInArray = favorite.some(el => el.id === selectedName[0].id);
		if (isInArray) {
			const newFavorites = favorite.slice(0,favorite.indexOf(selectedName[0])).concat(favorite.slice(favorite.indexOf(selectedName[0])+1));
			setFavorite(newFavorites);
			const newFiltered = filteredNames.concat(selectedName[0]).sort((a,b) => a.name > b.name);
			setFilteredNames(newFiltered);
		} else {
			setFavorite(favorite.concat(selectedName[0]));
			const newFiltered = filteredNames.slice(0,filteredNames.indexOf(selectedName[0])).concat(filteredNames.slice(filteredNames.indexOf(selectedName[0])+1));
			setFilteredNames(newFiltered);
		}
		
	}

  return (
    <>
	<FavoriteNames filteredNames={filteredNames} changeFavorite={changeFavorite} setFilteredNames={setFilteredNames} babyNamesSorted={babyNamesSorted} favorite={favorite} setFavorite={setFavorite}/>
	<NamesList filteredNames={filteredNames} changeFavorite={changeFavorite} setFilteredNames={setFilteredNames} babyNamesSorted={babyNamesSorted} favorite={favorite} setFavorite={setFavorite}/>
	</>
  );
}

export default App;
