import React from "react";
import RouteWithSubRoutes from "../../../config/RouteWithSubRoutes";
import axios from 'axios';

class StartPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mockedData: [] };
		this.componentDidMount = this.componentDidMount.bind(this);
		this.getRooms = this.getRooms.bind(this);
		this.sortByKey = this.sortByKey.bind(this);
		this.sortData = this.sortData.bind(this);
		this.searchInput = this.searchInput.bind(this);
	}

	searchInput(text) {
		console.log(text);
	}

	getRooms() {
		return axios.get('http://localhost:3000/api/rooms')
			.then(function (response) {
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	componentDidMount() {
		this.getRooms().then((result) => {
			this.setState({
				mockedData: result
			});
		})
	}

	renderRoom(room, index) {
		return (<div className="column" key={index}>
			<h2>{room.title}</h2>
			<p>Price:{room.price} kr</p>
			<p>{room.description}</p>
		</div>);
	}

	sortByKey(array, key) {
		if (key != 'pricehigh') {
			return array.sort(function (a, b) {
				var x = a[key]; var y = b[key];
				return ((x < y) ? -1 : ((x > y) ? 1 : 0));
			});
		} else {
			key = 'price';
			return array.sort(function (a, b) {
				var x = a[key]; var y = b[key];
				return ((x > y) ? -1 : ((x < y) ? 1 : 0));
			});
		}


	}

	sortData(event) {
		const option = event.target.id;

		switch (option) {
			case 'alph':
				this.setState({
					mockedData: this.sortByKey(this.state.mockedData, 'title')
				});
				break;
			case 'cheap':
				this.setState({
					mockedData: this.sortByKey(this.state.mockedData, 'price')
				});
				break;
			case 'expensive':
				this.setState({
					mockedData: this.sortByKey(this.state.mockedData, 'pricehigh')
				});
				break;
			default:
				return 0;
		}
	}

	render() {
		return (
			<div className="layout-content">
				<div className="headerSearch">
					<input type="text" placeholder="Search..." onChange={(e) => this.searchInput(e)} />
				</div>
				<div className="filter">
					<span id="alph" onClick={this.sortData}>Alphabetic</span>
					<span id="cheap" onClick={this.sortData}>Cheap</span>
					<span id="expensive" onClick={this.sortData}>Expensive</span>
				</div>
				<div className="grid">
					<div className="row rowinlineblock">
						{this.state.mockedData.map(this.renderRoom)}
					</div>
				</div>
			</div>
		);
	}
}

export default StartPage;
