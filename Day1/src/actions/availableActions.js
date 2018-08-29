import * as types from "./actionTypes";
import axios from "axios";
import endpoints from "../config/endpoints";

export function loadAvailableSuccess(availableDates) {
	return { type: types.LOAD_AVAILABLE_DATES, availableDates };
}
export function loadAvailableTimes() {
	return function (dispatch) {
		return axios.get(endpoints.available).then(payload => {
			if (payload.data) {
				dispatch(loadAvailableSuccess(payload.data));
			}
		})
	}
}

export function loadRoomByIdSuccess(room) {
	return { type: types.LOAD_ROOM_BY_ID_SUCCESS, room };
}
export function loadRoomById(roomId) {
	return function (dispatch) {
		return axios.get(endpoints.rooms + "/" + roomId)
			.then(function (response) {
				dispatch(loadRoomByIdSuccess(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
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
