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
			<h1>{this.state.room.title}</h1>
				<p>Room details</p>
			</div>
		);
	}
}

export default StartPage;
