import { combineReducers } from "redux";
import availableDates from "./availableReducer";
import room from "./roomReducer";

const rootReducer = combineReducers({
	availableDates,
	room
});

export default rootReducer;