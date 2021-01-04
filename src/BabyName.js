import React from "react";

const BabyName = (props) => {
	const symbol = props.sex === "m" ? "fa fa-mars" : "fa fa-venus";
	return <p className={props.sex}><i className={symbol} style={{fontSize: "24px"}}></i> {props.name}</p>
}

export default BabyName;