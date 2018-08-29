import * as types from "./actionTypes";
import axios from "axios";
import endpoints from "../config/endpoints";

export function loadAvailableSuccess(availableDates) {
	return { type: types.LOAD_AVAILABLE_DATES, availableDates };
}
export function loadAvailableTimes(){
	return function(dispatch) {
		return axios.get(endpoints.available).then(payload => {
			if(payload.data) {
				dispatch(loadAvailableSuccess(payload.data));
			}
		})
	}
}

// export function updateBooking(booking) {
// 	return { type: types.UPDATE_BOOKING, booking };
// }
// export function loadBookingsSuccess(bookings) {
// 	return { type: types.LOAD_BOOKINGS_SUCCESS, bookings };
// }

// export function loadBookings() {
// 	return function(dispatch) {
// 		return axios.get(bookingsEndpoint).then(payload => {
// 			if (payload.data) {
// 				dispatch(loadBookingsSuccess(payload.data));
// 			}
// 		});
// 	};
// }
// export function saveBooking(booking) {
// 	return function(dispatch) {
// 		if (!booking.id) {
// 			return axios.post(bookingsEndpoint, booking).then(payload => {
// 				dispatch(createBooking(payload.data));
// 			});
// 		} else {
// 			return axios.put(bookingsEndpoint, booking).then(payload => {
// 				dispatch(updateBooking(payload.data));
// 			});
// 		}
// 	};
// }
