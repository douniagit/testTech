import React from 'react';
import "./bandes.css";
import infos from "../../public/img/infos.png";

class Bandes extends React.Component{
	render(){
		return(
			<div className="bandes">
				<img src={infos} alt="c"/>
			</div>
		);
	}
}

export default Bandes;