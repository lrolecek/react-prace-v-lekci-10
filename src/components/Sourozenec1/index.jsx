import React, {useState} from 'react';
import './style.css';

const Sourozenec1 = ({rekniSegre}) => {

	return (
		<div className="sourozenec1">
			<h3>Sourozenec 1</h3>
			<button onClick={() => ( rekniSegre('Aleno, smrdíš!'))}>
				Řekni ségře, že smrdí
			</button>
		</div>
	)
}

export default Sourozenec1;
