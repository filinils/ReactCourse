import React from "react";
import RouteWithSubRoutes from "../../../config/RouteWithSubRoutes";
import { connect } from "react-redux";
import Booking from '../../Booking/Booking';

import axios from 'axios';
import * as availableActions from "../../../actions/availableActions";

class RoomPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {room:  {
			id: '',
			img: '',
			price: '',
			title: '',
			description: '',
			type: '',
            guests: '',
            nrOfRooms: '',
            nrOfBeds: '',
            nrOfBathrooms: ''
		}}

		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		this.props.loadRoom(this.props.match.params.id);
	}

	render() {
		return (
			<div className="layout-content">

				<div className="hero-img" style={{ backgroundImage: "url(" + this.props.room.img + ")" }}></div>
				<div className="box1">
					<div className="rightside">
					<h1 className="title">{this.props.room.title}</h1>
					<p>{this.props.room.type}</p>	
					<div className="row">
						<div className="column">{this.props.room.guests} gäster </div>
						<div className="column">{this.props.room.nrOfRooms} sovrum </div>
						<div className="column">{this.props.room.nrOfBeds} sängar </div>
						<div className="column">{this.props.room.nrOfBathrooms} badrum</div>
					</div>				
						<div className="box-text">
							<p>{this.props.room.description}</p>
						</div>
					</div>
					<div className="leftside">
						<h3 className="titleh3">Boka</h3>
						<div>
							<Booking />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		room: state.room ? state.room :  {
			id: '',
			img: '',
			price: '',
			title: '',
			description: '',
			type: '',
            guests: '',
            nrOfRooms: '',
            nrOfBeds: '',
            nrOfBathrooms: ''
		}
	};
}

function mapDispatchToProps(dispatch) {
	return {
		loadRoom: (roomId) => {
			return dispatch(availableActions.loadRoomById(roomId));
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RoomPage);
