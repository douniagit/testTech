import React from 'react';
import contenu from "./data.js";
import './cards.css';

class Cards extends React.Component{
	render(){
		return(
			<div className="cards">
					{contenu.activites.map(info =>
					    <div className="Card">
					            <img src={info.image} className="img" alt="a"/>
					        <div className="text1">
					              <div className="date1">{info.dates}</div>
					                <div className="title1">{info.name}</div>
					                <div className="desc1">{info.description}</div>
					                <p>Lire la suite +</p>
					        </div>
					    </div>
					          )}

			</div>
		);
	}
}

export default Cards;