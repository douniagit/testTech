import React from 'react';
import './Footer.css';
import contenu from "../Cards/data.js";
import pac from "./../../public/img/pac.png";
import bloc from "./../../public/img/bloc.png";
import logo from "./../../public/img/logo.png"


class Footer extends React.Component {

	render(){
		return(
		<div className="container">
			<div className="footer">
				<div className="infosFooter">
				    <img className="logo4" alt="" src={logo}/>
					    <div className="foot">
					        <div className="text4">
					            <div className="adresse">{contenu.addresse}</div>
					            <div className="title4">{contenu.codePostale}</div>
					            <div className="phone">{contenu.phone}</div>
					            <br/>
					            <div className="desc4">{contenu.description}</div>
					        </div>
					    </div>
				</div>	

				<div className="newsletter">
					<h3>Newsletter</h3>
					<p>S'abonner à PrefereNEWS</p>
					<input type="text" placeholder="Votre Email"/>
					<button>ok</button>
					<ul>
						<li>Accedez aux anciens numéros de PrefereNEWS</li>
						<li>Espace presse</li>
						<li>Téléchargez nos publications</li>
						<li>On recrute</li>
						<li>Contact</li>
					</ul>
				</div>	


				<div className="bloc">
					<img src={bloc}/>	
					<div className="reseaux">
						<p>Suivez-nous</p>
						<img src={pac}/>
					</div>
				</div>	
			</div>
			<div className="cop">
				    <p>Mentions légales - Emploi - ©Préférendum 2016</p>
			</div>	
			
		</div>
	    )

	}
}

export default Footer;
