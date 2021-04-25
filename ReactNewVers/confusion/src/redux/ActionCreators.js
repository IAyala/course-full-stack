import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

// The Action must be a plain JS Object. With the type and the payload
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// This is a thunk, this returns a function
export const fetchDishes = () => (dispatch) => {
    console.log("ComiendoMierda")
    dispatch(dishesLoading(true));
    setTimeout(
        () => {dispatch(addDishes(DISHES));}, 
        2000 // Call to addDishes after a 2000ms delay
    );
}

// This is an action. An action that does not have a payload. Only informs that the dishes are loading
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

// This is another action
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

// Another action
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes 
});