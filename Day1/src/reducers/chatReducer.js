import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function chatReducer(state = initialState.messages, action) {
    switch (action.type) {
        case types.LOAD_NEW_MESSAGES:
            //const x = Object.assign({}, action.availableDates);
            //return x;
            let messages = [...state, action.messages.messageJson]


            return messages;
        default:
            return state;
    }
}
