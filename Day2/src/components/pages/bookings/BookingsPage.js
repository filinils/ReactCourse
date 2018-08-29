import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as bookingActions from "../../../actions/bookingActions";

class Bookings extends React.Component {
	constructor(props) {
		super(props);

		this.redirectToAddBooking = this.redirectToAddBooking.bind();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps != this.props) {
		}
	}

	bookingRow(booking, index) {
		bookingActions.createBooking(booking);
		return (
			<li key={index}>
				<Link to={"/booking/" + booking.id}>{booking.test}</Link>
			</li>
		);
	}

	redirectToAddBooking() {}
	render() {
		return (
			<div className="layout-content">
				<h2>Bookings</h2>
				<input
					type="submit"
					value="Add booking"
					onClick={this.redirectToAddBooking}
				/>

				<ul>{this.props.bookings.map(this.bookingRow)}</ul>
			</div>
		);
	}
}
Bookings.propTypes = {
	bookings: PropTypes.array.isRequired
};
function mapStateToProps(state, ownProps) {
	return {
		bookings: state.bookings ? state.bookings : []
	};
}

function mapDispatchToProps() {}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Bookings);
