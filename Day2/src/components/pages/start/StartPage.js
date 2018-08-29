import React from "react";
import RouteWithSubRoutes from "../../../config/RouteWithSubRoutes";

class StartPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="layout-content">
				<div className="grid">
					<div className="row">
						<div className="column">first row first column</div>
						<div className="column">first row second column</div>
						<div className="column">first row</div>
						<div className="column">first row</div>
						<div className="column">first row</div>
					</div>
					<div className="row">
						<div className="column">second row</div>
						<div className="column">second row</div>
						<div className="column">second row</div>
						<div className="column">second row</div>
						<div className="column">second row</div>
					</div>
					<div className="row">
						<div className="column">third row</div>
						<div className="column">third row</div>
						<div className="column">third row</div>
						<div className="column">third row</div>
						<div className="column">third row</div>
					</div>
					<div className="row">
						<div className="column">forth row</div>
						<div className="column">forth row</div>
						<div className="column">forth row</div>
						<div className="column">forth row</div>
						<div className="column">forth row</div>
					</div>
					<div className="row">
						<div className="column">fifth row</div>
						<div className="column">fifth row</div>
						<div className="column">fifth row</div>
						<div className="column">fifth row</div>
						<div className="column">fifth row</div>
					</div>
				</div>
			</div>
		);
	}
}

export default StartPage;
