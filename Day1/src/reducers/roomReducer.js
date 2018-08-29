import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function roomReducer(state = initialState.room, action) {
	switch (action.type) {
		case types.LOAD_ROOM_BY_ID_SUCCESS:
			const x = Object.assign({}, action.room);
			return x;
		default:
			return state;
	}
}
