import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
        isLoading: true,
        errmess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {
                ...state, 
                isLoading: false, errmess: null, dishes: action.payload
            };
        case ActionTypes.DISHES_LOADING:
            return {
                ...state, 
                isLoading: true, errmess: null, dishes: []
            }; // Take the state as it is, create a copy, apply the modifications stated after the first comma, and return it
        case ActionTypes.DISHES_FAILED:
            return {
                ...state, 
                isLoading: false, errmess: action.payload
            }; // Remember the error message was being saved on the action payload
        default:
            return state;
    }
}