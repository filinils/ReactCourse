import { combineReducers } from "redux";
import availableDates from "./availableReducer";
import messages from "./chatReducer";

const rootReducer = combineReducers({
	availableDates,
	messages
});

export default rootReducer;
