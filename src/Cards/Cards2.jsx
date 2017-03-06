import React from 'react';
import contenu from "./data.js";
import './cards2.css';

class Cards2 extends React.Component{
	render(){
		return(
			<div className="cards2">
					{contenu.articles.map(info =>
					    <div className="Card2">
					            <img src={info.image} className="img1" alt="a"/>
					        <div className="text">
					                <div className="title">{info.name}</div>
					                <div className="desc">{info.description}</div>
					        </div>       
					        <div className="post">
					         	<p>Lire l'article</p>
					       	</div>
					    </div>
					          )}

			</div>
		);
	}
}

export default Cards2;