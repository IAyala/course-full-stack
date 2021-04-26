import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL';

// The Action must be a plain JS Object. With the type and the payload
export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseURL + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) // Convert return to json
        .then(response => dispatch(addComment(response))) // You update the store here !!
        .catch(error => { 
            console.log('Post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        })
}

// This is a thunk, this returns a function
export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseURL + 'dishes')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        }) // last one is an error handler in case the server even does not respond
        .then(response => response.json()) // Convert return to json
        .then(dishes => dispatch(addDishes(dishes))) // Once response.json() is ok, dispatch the addDishes(dishes)
        .catch(error => dispatch(dishesFailed(error.message)));
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
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) // Convert return to json
        .then(comments => dispatch(addComments(comments))) // Once response.json() is ok, dispatch
        .catch(error => dispatch(commentsFailed(error.message)));
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
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) // Convert return to json
        .then(promos => dispatch(addPromos(promos))) // Once response.json() is ok, dispatch
        .catch(error => dispatch(promosFailed(error.message)));
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

// This is a thunk, this returns a function
export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    return fetch(baseURL + 'leaders')
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json()) // Convert return to json
        .then(leaders => dispatch(addLeaders(leaders))) // Once response.json() is ok, dispatch
        .catch(error => dispatch(leadersFailed(error.message)));
}

// This is an action. An action that does not have a payload. Only informs that the leaders are loading
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

// This is another action
export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

// Another action
export const addLeaders = (promos) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: promos
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contactType, message) => (dispatch) => {
    const newFeedback = {
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }
    newFeedback.date = new Date().toISOString();

    return fetch(baseURL + 'feedback', {
            method: 'POST',
            body: JSON.stringify(newFeedback),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then(response => {
            if(response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, 
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(feedback => {
            const message = "Feedback has been posted: " + JSON.stringify(feedback);
            alert(message);
        })
        .catch(error => { 
            console.log('Post feedback', error.message);
            alert('Your feedback could not be posted\nError: ' + error.message);
        })
}