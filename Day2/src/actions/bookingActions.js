import * as types from "./actionTypes";
import axios from "axios";

const bookingsEndpoint = "http://localhost:3000/api/bookings";

export function createBooking(booking) {
	return { type: types.CREATE_BOOKING, booking };
}
export function updateBooking(booking) {
	return { type: types.UPDATE_BOOKING, booking };
}
export function loadBookingsSuccess(bookings) {
	return { type: types.LOAD_BOOKINGS_SUCCESS, bookings };
}

export function loadBookings() {
	return function(dispatch) {
		return axios.get(bookingsEndpoint).then(payload => {
			if (payload.data) {
				dispatch(loadBookingsSuccess(payload.data));
			}
		});
	};
}
export function saveBooking(booking) {
	return function(dispatch) {
		if (!booking.id) {
			return axios.post(bookingsEndpoint, booking).then(payload => {
				dispatch(createBooking(payload.data));
			});
		} else {
			return axios.put(bookingsEndpoint, booking).then(payload => {
				dispatch(updateBooking(payload.data));
			});
		}
	};
}
