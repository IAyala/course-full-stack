import * as ActionTypes from './ActionTypes';

export const Promotions = (state = {
        isLoading: true,
        errmess: null,
        promotions: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PROMOS:
            return {
                ...state, 
                isLoading: false, errmess: null, promotions: action.payload
            };
        case ActionTypes.PROMOS_LOADING:
            return {
                ...state, 
                isLoading: true, errmess: null, promotions: []
            }; // Take the state as it is, create a copy, apply the modifications stated after the first comma, and return it
        case ActionTypes.PROMOS_FAILED:
            return {
                ...state, 
                isLoading: false, errmess: action.payload
            }; // Remember the error message was being saved on the action payload
        default:
            return state;
    }
}