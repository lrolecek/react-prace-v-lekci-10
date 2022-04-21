import React, {useState} from 'react';
import './style.css';

const Dite = ({jmeno, diteMaHlad}) => {

	return (
		<div className="dite">
			<h3>Dítě: {jmeno}</h3>
			<button onClick={() => {diteMaHlad(jmeno)}}>Mám hlad</button>
		</div>
	)
}

export default Dite;
