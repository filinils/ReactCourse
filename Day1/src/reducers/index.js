import { combineReducers } from "redux";
import availableDates from "./availableReducer";
import messages from "./chatReducer";
import room from "./roomReducer";

const rootReducer = combineReducers({
	availableDates,
	room,
	messages
});

export default rootReducer;