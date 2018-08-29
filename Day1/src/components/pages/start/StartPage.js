import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import RouteWithSubRoutes from "../../../config/RouteWithSubRoutes";
import axios from 'axios';
import Chat from './../../chatcomponent/chat';

class StartPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { mockedData: [], tempData: [] };
		this.componentDidMount = this.componentDidMount.bind(this);
		this.getRooms = this.getRooms.bind(this);
		this.sortByKey = this.sortByKey.bind(this);
		this.sortData = this.sortData.bind(this);
		this.searchInput = this.searchInput.bind(this);
	}

	searchInput(event) {
		const searchTerm = event.target.value;
		for (var i = 0; i < this.state.mockedData.length; i++) {
			if (this.state.mockedData[i].title.indexOf(searchTerm) != -1) {
				this.setState({
					mockedData: [this.state.mockedData[i]]
				})

			}
		}

		if (searchTerm.length <= 0) {
			this.setState({
				mockedData: this.state.tempData
			});
		}
	}

	getRooms() {
		return axios.get('http://46.101.184.228:3000/api/rooms')
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
				mockedData: result,
				tempData: result
			});
		})
	}

	renderRoom(room, index) {
		return (<Link to={room.link} key={index}> <div className="column startPageColumn">
			<h2>{room.title}</h2>
			<p>Price:{room.price} kr</p>
			<p className="paragraphDescr">{room.description}</p>
		</div></Link>);
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
					<input type="text" name="search" placeholder="Search..." onChange={this.searchInput} />
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

				<Chat />
			</div>
		);
	}
}

export default StartPage;
