import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
        errmess: null,
        comments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload
            // When we add a server, this will be provided by our server. For the moment, we will do it this way
            comment.id = state.comments.length; // As JS Arrays are 0-based index
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)} // Concat method WILL CREATE A NEW OBJECT. It is an immutable operation. This is important...
        case ActionTypes.ADD_COMMENTS:
            return {...state, errmess: null, comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, errmess: action.payload}
        default:
            return state;
    }
}