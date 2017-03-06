import React from 'react';
import "../Bandes/bandes.css";
import Cards2 from "./../Cards/Cards2.jsx";

class Bandes2 extends React.Component{
	render(){
		return(
			<div className="bandes2">
				<h2 style={{paddingTop:"50px"}}> SHARE-<span>ING</span></h2>
				<Cards2 />
			</div>
		);
	}
}

export default Bandes2;