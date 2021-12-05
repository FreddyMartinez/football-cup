import { useReducer } from "react";
import CountryContex, { initialState } from "./CountryContext";
import CountryReducer from "./CountryReducer";
import * as types from "../Types";
import axios from "axios";
import { CountryInterface } from "../../util/interfaces";
import { requestHeader } from "../../util/constants";

const CountryState = (props: { children: any }) => {
  const [state, dispatch] = useReducer(CountryReducer, initialState);

  const setLoading = () => {
    dispatch({ type: types.SET_LOADING });
  };

  const searchCountries = async () => {
    setLoading();
    try {
      // In this case I'm using only the 32 teams that participated in the 2018 World Cup
      const axiosRes = await axios.get(
        "https://api.football-data.org/v2/competitions/2000/teams",
        { headers: requestHeader }
      );
      const countries: CountryInterface[] = axiosRes.data.teams;

      dispatch({ type: types.GET_COUNTRIES, payload: countries });
    } catch (error) {
      dispatch({ type: types.GET_COUNTRIES, payload: [] });
    }
  };

  return (
    <CountryContex.Provider
      value={{
        countries: state.countries,
        loading: state.loading,
        searchCountries,
      }}
    >
      {props.children}
    </CountryContex.Provider>
  );
};

export default CountryState;
