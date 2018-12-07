import * as actionTypes from "../constants/actionTypes";
import * as moviesApi from "../api/moviesApi";

export const getMovies = data => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ACTION_GET_MOVIES_STARTED
  });
  moviesApi.getMovies().then(
    response => {
      if (response.status !== 200) {
        dispatch({
          type: actionTypes.ACTION_GET_MOVIES_FAILED,
          errorMessage: "Error status" + response.status
        });
      } else {
        response.json().then(value => {
          const responseObject = value;
          dispatch({
            type: actionTypes.ACTION_GET_MOVIES_SUCCESS,
            movies: responseObject
          });
        });
      }
    },
    error => {
      dispatch({
        type: actionTypes.ACTION_GET_MOVIES_FAILED,
        errorMessage: "something went wrong"
      });
    }
  );
};
