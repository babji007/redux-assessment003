import { FETCH_ABILITIES, INVALID_REQST} from "./index.js";
import axios from "axios";


export const fetchabilities = (pokemon) => async (dispatch) => {
 await
  axios.get("https://pokeapi.co/api/v2/pokemon/"+ pokemon)
    .then((res) => {
      // console.log("data123", res.data);
      dispatch(get(res.data));
    })
    .catch((error) => {
      // console.log("error");
      dispatch(fetchError(error));
    });
};
const get = (res) => {
  return {
    type: FETCH_ABILITIES,
    payload: res.abilities
    
  };
};
const fetchError = (error) => {
  return {
    type: INVALID_REQST,
    payload: true
  };
};
