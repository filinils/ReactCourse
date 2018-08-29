import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function bookingsReducer(state = initialState.bookings, action) {
	switch (action.type) {
		case types.CREATE_BOOKING:
			return [...state, Object.assign({}, action.booking)];
		case types.UPDATE_BOOKING:
			return [
				...state.filter(booking => booking.id !== action.booking.id),
				Object.assign({}, action.booking)
			];
		case types.LOAD_BOOKINGS_SUCCESS:
			return action.bookings;
		default:
			return state;
	}
}

state.booking.name = "Home";

let newState = Object.assing({}, state);

state.splice();
newState.booking.name = "Home2";

state != newState;
