import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL';

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
    dispatch(dishesLoading(true));
    return fetch(baseURL + 'dishes')
        .then(response => response.json()) // Convert return to json
        .then(dishes => dispatch(addDishes(dishes))); // Once response.json() is ok, dispatch the addDishes(dishes)
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

// This is a thunk, this returns a function
// Comments are not loading
export const fetchComments = () => (dispatch) => {
    return fetch(baseURL + 'comments')
        .then(response => response.json()) // Convert return to json
        .then(comments => dispatch(addComments(comments))); // Once response.json() is ok, dispatch
}

// Another action
export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments 
});

// This is another action
export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

// This is a thunk, this returns a function
export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseURL + 'promotions')
        .then(response => response.json()) // Convert return to json
        .then(promos => dispatch(addPromos(promos))); // Once response.json() is ok, dispatch
}

// This is an action. An action that does not have a payload. Only informs that the dishes are loading
export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

// This is another action
export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

// Another action
export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});