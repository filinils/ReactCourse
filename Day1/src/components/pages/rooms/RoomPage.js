import React from "react";
import RouteWithSubRoutes from "../../../config/RouteWithSubRoutes";

class StartPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="layout-content">
				<div className="hero-img"></div>
				<div className="box1">
					<div className="rightside">
					<h1 className="title">Tile House</h1>
					<p>Twentynine Palms</p>	
					<div className="row">
						<div className="column">4 gäster </div>
						<div className="column">2 sovrum </div>
						<div className="column">2 sängar </div>
						<div className="column">1 badrum</div>
					</div>				
						<div className="box-text">
							<h4>OENDETS HÖJDPUNKTER</h4>
							<p>Bra läge · 95 % av gäster nyligen gav boendets läge fem stjärnor.</p>
						</div>
					</div>
					<div className="leftside">
						<h3 className="titleh3">000000</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default StartPage;
