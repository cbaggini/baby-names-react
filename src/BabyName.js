import React from "react";

const BabyName = ({sex, name, changeFavorite}) => {
	const symbol = sex === "m" ? "fa fa-mars" : "fa fa-venus";
	return <button className={sex} onClick={changeFavorite}><i className={symbol} style={{fontSize: "24px", pointerEvents: "none"}}></i>{name}</button>
}

export default BabyName;
