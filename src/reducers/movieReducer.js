import { combineReducers } from "redux";
import * as actionTypes from "../constants/actionTypes";

const items = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIES_SUCCESS:
      return action.movies;
    case actionTypes.ACTION_GET_MOVIES_STARTED:
    case actionTypes.ACTION_GET_MOVIES_FAILED:
      return [];
    default:
      return state;
  }
};

const movieReducer = combineReducers({
  items
});

export default movieReducer;
