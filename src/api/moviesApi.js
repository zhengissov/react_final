import { REST_API_URL, STD_HEADERS, API_key } from "../constants/server";

const moviesUrl = REST_API_URL + "discover/movie?api_key=" + API_key;

export const getMovies = () =>
  fetch(moviesUrl, {
    method: "GET",
    headers: { ...STD_HEADERS }
  });
