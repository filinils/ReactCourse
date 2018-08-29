import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function availableReducer(state = initialState.availableDates, action) {
	switch (action.type) {
		case types.LOAD_AVAILABLE_DATES:
			const x = Object.assign([], action.availableDates);
			return x;
			return [...state, Object.assign({}, action.availableDates)];
		default:
			return state;
	}
}
