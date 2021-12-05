import { ActionInterface } from "../../util/interfaces/action.interface";
import { CountryInterface } from "../../util/interfaces/country.interface";
import * as types from "../Types";

export interface CountryStateIterface {
  countries: CountryInterface[];
  loading: boolean;
  searchCountries?: () => any;
}

const CountryReducer = (state: CountryStateIterface, action: ActionInterface) => {
  switch (action.type) {
    case types.GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };

    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export default CountryReducer;