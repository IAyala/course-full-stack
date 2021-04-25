import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload
            // When we add a server, this will be provided by our server. For the moment, we will do it this way
            comment.id = state.length; // As JS Arrays are 0-based index
            comment.date = new Date().toISOString();
            return state.concat(comment) // Concat method WILL CREATE A NEW OBJECT. It is an immutable operation. This is important...
        default:
            return state;
    }
}