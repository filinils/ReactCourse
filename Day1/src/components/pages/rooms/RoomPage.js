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
			<h1>Room Headline</h1>
				<p>Room details</p>
			</div>
		);
	}
}

export default StartPage;
