import React from 'react';
import '../navbar/Navbar.css';



class Header extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="back">
					<div className="infoPratique">
						<p className="p1"> BESOIN D'UNE AGENCE</p>
						<p className="p2">POUR GERER <span>TOUTES LES VIES</span></p>
						<p className="p3"><span>DE</span> VOTRE MARQUE ?</p>
					</div>
				</div>
		</div>
	    )

	}
}

export default Header;
