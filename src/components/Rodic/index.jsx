import React, {useState} from 'react';
import './style.css';

import Dite from './../Dite';
import Sourozenec1 from './../Sourozenec1';
import Sourozenec2 from './../Sourozenec2';

const Rodic = () => {

	const [hladoveDite, setHladoveDite] = useState(null);

	const diteMaHlad = (jmeno) => {
		setHladoveDite(jmeno)
	}


	const [zprava, setZprava] = useState(null);

	const rekniSegre = (text) => {
		setZprava(text);
	}



	return (
		<div className="rodic">
			<h3>Rodič</h3>

			<Sourozenec1 rekniSegre={rekniSegre}/>

			<Sourozenec2 zprava={zprava}/>


			<hr />

			<p>
				{ hladoveDite === null ? 'Nikdo nemá hlad, jupíí!' : `${hladoveDite} má hlad.` }
			</p>

			<Dite jmeno="Adam" diteMaHlad={diteMaHlad}/>
			<Dite jmeno="Eva" diteMaHlad={diteMaHlad}/>
			<Dite jmeno="Kamila" diteMaHlad={diteMaHlad} />
		</div>
	)
}

export default Rodic;
