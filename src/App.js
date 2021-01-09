import './App.css';
import React, {useState} from 'react';
import NamesList from "./NamesList";
import FavoriteNames from './FavoriteNames';

import babyNamesData from "./data/babyNamesData.json";

function App() {
	const babyNamesSorted = babyNamesData.sort((a,b) => a.name > b.name);
	const [filteredNames, setFilteredNames] = useState({names: babyNamesSorted, search:''});
	const [favorite, setFavorite] = useState([]);
	const [genders, setGenders] = useState('mf');

	const filterNames = (e) => {
		if (e.target.value) {
			const newNames = babyNamesSorted.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()) && genders.includes(el.sex) && favorite.indexOf(el) < 0);
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
			const newFiltered = filteredNames.names.concat(selectedName[0]).sort((a,b) => a.name > b.name).filter(el => el.name.toLowerCase().includes(filteredNames.search.toLowerCase()) && genders.includes(el.sex));
			setFilteredNames({...filteredNames, names: newFiltered});
		} else {
			setFavorite(favorite.concat(selectedName[0]));
			const newFiltered = filteredNames.names.slice(0,filteredNames.names.indexOf(selectedName[0])).concat(filteredNames.names.slice(filteredNames.names.indexOf(selectedName[0])+1));
			setFilteredNames({...filteredNames, names: newFiltered});
		}	
	}

	const toggleGenders = (e) => {
		e.preventDefault();
		if (e.target.innerText === 'All') {
			const newFilteredNames = babyNamesSorted.filter(el => el.name.toLowerCase().includes(filteredNames.search.toLowerCase()) && favorite.indexOf(el) < 0);
			setFilteredNames({...filteredNames, names: newFilteredNames});
			setGenders('mf');
			e.target.className = 'mf selected';
			e.target.nextSibling.className = 'f';
			e.target.nextSibling.nextSibling.className = 'm';
		} else if (e.target.innerText === 'Girls') {
			const newFilteredNames = babyNamesSorted.filter(el => el.name.toLowerCase().includes(filteredNames.search.toLowerCase()) && el.sex === 'f' && favorite.indexOf(el) < 0);
			setFilteredNames({...filteredNames, names: newFilteredNames});
			setGenders('f');
			e.target.className = 'f selected';
			e.target.nextSibling.className = 'm';
			e.target.previousSibling.className = 'mf';
		} else {
			const newFilteredNames = babyNamesSorted.filter(el => el.name.toLowerCase().includes(filteredNames.search.toLowerCase()) && el.sex === 'm' && favorite.indexOf(el) < 0);
			setFilteredNames({...filteredNames, names: newFilteredNames});
			setGenders('m');
			e.target.className = 'm selected';
			e.target.previousSibling.className = 'f';
			e.target.previousSibling.previousSibling.className = 'mf';
		}
	}

  return (
    <>
	<FavoriteNames changeFavorite={changeFavorite} favorite={favorite} />
	<NamesList filteredNames={filteredNames} filterNames={filterNames} changeFavorite={changeFavorite} toggleGenders={toggleGenders}/>
	</>
  );
}

export default App;
