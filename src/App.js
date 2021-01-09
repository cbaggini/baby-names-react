import './App.css';
import React, {useState} from 'react';
import NamesList from "./NamesList";
import FavoriteNames from './FavoriteNames';

import babyNamesData from "./data/babyNamesData.json";

function App() {
	const babyNamesSorted = babyNamesData.sort((a,b) => a.name > b.name);
	const [filteredNames, setFilteredNames] = useState({names: babyNamesSorted, search:''});
	const [favorite, setFavorite] = useState([]);

	const filterNames = (e) => {
		if (e.target.value) {
			const newNames = babyNamesSorted.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
			setFilteredNames({names: newNames, search: e.target.value});
		} else {
			setFilteredNames({names: babyNamesSorted, search:''});
		}	
	}

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
			const newFiltered = filteredNames.names.concat(selectedName[0]).sort((a,b) => a.name > b.name).filter(el => el.name.toLowerCase().includes(filteredNames.search.toLowerCase()));
			setFilteredNames({...filteredNames, names: newFiltered});
		} else {
			setFavorite(favorite.concat(selectedName[0]));
			const newFiltered = filteredNames.names.slice(0,filteredNames.names.indexOf(selectedName[0])).concat(filteredNames.names.slice(filteredNames.names.indexOf(selectedName[0])+1));
			setFilteredNames({...filteredNames, names: newFiltered});
		}
		
	}

  return (
    <>
	<FavoriteNames filteredNames={filteredNames} changeFavorite={changeFavorite} setFilteredNames={setFilteredNames} babyNamesSorted={babyNamesSorted} favorite={favorite} setFavorite={setFavorite}/>
	<NamesList filteredNames={filteredNames} filterNames={filterNames} changeFavorite={changeFavorite} setFilteredNames={setFilteredNames} babyNamesSorted={babyNamesSorted} favorite={favorite} setFavorite={setFavorite}/>
	</>
  );
}

export default App;
