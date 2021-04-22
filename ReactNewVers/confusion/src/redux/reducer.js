// We will implement the reducer function here. It is a pure function

// Move all the state to the reducer, instead of Main Component
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {PROMOTIONS} from '../shared/promotions';
import {LEADERS} from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

// state = initialState is a ES6 feature that allows to setup an initial default value to the Reducer function
export const Reducer = (state = initialState, action) => {
    return state;
};
