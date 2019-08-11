import { SET_SEARCH_FILTER } from './../actions/index';
import { combineReducers } from 'redux';

const searchFilter = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.text;
    default:
      return state;
  }
};

const AppReducer = combineReducers({
  searchFilter,
});

export default AppReducer;
