import React from 'react';
import Activites from "../Activites/Activites.jsx";
import Bandes from "../Bandes/Bandes.jsx";
import Bandes2 from "../Bandes2/Bandes2.jsx";
import quote from "../../public/img/quote.png";
import "./infos.css";
import plus from "./../../public/img/plus.png";
import b1 from "./../../public/img/b1.png";
import b2 from "./../../public/img/b2.png";
import b3 from "./../../public/img/b3.png";

class Infos extends React.Component {

	render(){
		return(
			<div>
			<div className="infos">
				<div className="intro">
					<h2> PLUS D'ENERGIE VITALE <br/> POUR ENTRER DANS LA VIE DE VOS CLIENTS</h2>
						<p>amque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica texit et paludamento communi, eum post haec nihil passurum velut mandato principis iurandi crebritate confirmans et statim inquit exsurge et inopinum carpento privato inpositum ad Histriam duxit prope oppidum Polam, ubi quondam peremptum Constantini filium accepimus Crispum.</p>
				</div>	

					<h2> ACTUALITES</h2>
					<Activites />
					<br/>
				<div className="bloc1">
					<p>PLUS D'ACTUS</p> 
					<img src={plus}/>
				</div>
			</div>
			<Bandes/>
			<div className="citation">
				<img className="normal" src={quote} alt="b"/>
					<h1>MSD Animal Health</h1>
					<p>"Haec ubi latius fama vulgasset missaeque relationes adsiduae Gallum Caesarem permovissent, quoniam magister equitum longius ea tempestate distinebatur, iussus comes orientis Nebridius contractis undique militaribus copiis ad eximendam periculo civitatem amplam et oportunam studio properabat ingenti, quo cognito abscessere latrones nulla re amplius memorabili gesta, dispersique ut solent avia montium petiere celsorum."</p>
				<img className="reverse" src={quote} alt="c"/>
			</div>
				<Bandes2/>
			<div className="download">
					<h2>TELECHARGEZ VOS PUBLICATIONS</h2>
				<div className="dl">	
					<div className="dl1 resize"><img className="bk" src={b2} alt="c"/>
						<p>5 étapes pour repenser<br/> votre <span>stratégie marketing.</span></p>
						</div>
					<div className="dl2 resize"><img className="bk" src={b3} alt="c"/>
						<p> Découvrez les raisons pour lesquelles <br/> vous ne pouvez vous priver du<br/> <span>Responsive Design</span> pour vos sites.</p>
						</div>
					<div className="dl3 resize"><img className="bk" src={b1} alt="c"/>
						<p> L'agriculture à l'ère du digital: <br/>la nouvelle donne de la <span>communication agricole.</span></p>
						</div>
				</div>

					<div className="bloc1">
					<p>VOIR TOUTES LES PUBLICATIONS</p> 
					<img src={plus}/>
				</div>
			</div>

			</div>

	    )

	}
}

export default Infos;
