export const ADD_COMMENT = 'ADD_COMMENT';

export const DISHES_LOADING = 'DISHES_LOADING'; // dishes loading from the server
export const DISHES_FAILED = 'DISHES_FAILED';   // dishes failed to be fetched from the server
export const ADD_DISHES = 'ADD_DISHES';         // Add dishes to the store

export const PROMOS_LOADING = 'PROMOS_LOADING';
export const PROMOS_FAILED = 'PROMOS_FAILED';
export const ADD_PROMOS = 'ADD_PROMOS';

// No comments loading because by the time we go to DishDetail component, the Comments are already fetched
export const COMMENTS_FAILED = 'COMMENTS_FAILED';
export const ADD_COMMENTS = 'ADD_COMMENTS';

export const LEADERS_LOADING = 'LEADERS_LOADING';
export const LEADERS_FAILED = 'LEADERS_FAILED';
export const ADD_LEADERS = 'ADD_LEADERS';