import React from 'react';
import './Navbar.css';
import fb from "../../public/img/fb.png";
import tw from "../../public/img/tw.png";
import ln from "../../public/img/ln.png";

class Navbar extends React.Component {

	render(){
		return(
			<div className="header">
				<div className="navbar">
					<div className="logo">
					  <img className="logoT" src="https://media.licdn.com/media/AAEAAQAAAAAAAALmAAAAJGYzOWMxMTY4LWFhZmYtNDZlZC04NWVhLTljMGY3NmMyOWNjOA.png" alt="logo"/>
				    </div>
				    <div className="wrapper">
				    	<div className="res">
				    		<ul>
								<li className="rezo"><img src={fb}/></li>
								<li className="rezo"><img src={tw}/></li>
								<li className="rezo"><img src={ln}/></li>
							</ul>
				    	</div>
						<div className="menu">
							<ul>
								<li><a href="#" className="list x">ACCUEIL</a></li>
								<li><a href="#" className="list">AGENCE</a></li>
								<li><a href="#" className="list">REFERENCES</a></li>
								<li><a href="#" className="list">INTERNATIONAL</a></li>
								<li><a href="#" className="list">BLOG</a></li>
								<li><a href="#" className="list">CONTACT</a></li>
							</ul>
						</div>
						
					</div>
				</div>
		</div>
	    )

	}
}

export default Navbar;
