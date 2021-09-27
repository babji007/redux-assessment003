import { FETCH_COUNTRIES, INVALID_REQST} from "./index.js";
import axios from "axios";


export const getCountries = (name) => async (dispatch) => {
  await
  axios.get("https://pokeapi.co/api/v2/pokemon/"+ name)
    .then((res) => {
      console.log("data123", res.data);
      dispatch(get(res.data));
    })
    .catch((error) => {
      console.log("error");
      dispatch(fetchError(error));
    });
};
const get = (countries) => {
  return {
    type: FETCH_COUNTRIES,
    payload: countries.abilities,
    
  };
};
const fetchError = (error) => {
  return {
    type: INVALID_REQST,
    payload: true
  };
};
