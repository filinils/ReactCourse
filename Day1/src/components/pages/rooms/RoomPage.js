import React from "react";
import RouteWithSubRoutes from "../../../config/RouteWithSubRoutes";

import axios from 'axios';

class StartPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {room:  {
			id: '',
			img: [],
			price: '',
			title: '',
			description: ''
		}}

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	getRoom(roomId) {
		return axios.get('http://localhost:3000/api/rooms/' + roomId)
				.then(function (response) {
					return response.data;
				})
				.catch(function (error) {
					console.log(error);
				});
	}

	componentDidMount() {
		const roomId = this.props.match.params.id;
		this.getRoom(roomId).then(result => this.setState({room: result}));
		
	}

	render() {
		return (
			<div className="layout-content">

				<div className="hero-img"></div>
				<div className="box1">
					<div className="rightside">
					<h1 className="title">{this.state.room.title}</h1>
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
