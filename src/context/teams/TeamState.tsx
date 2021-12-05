import React, { useReducer } from "react";
import TeamContext, { initialState } from "./TeamContext";
import TeamReducer from "./TeamReducer";
import * as types from "../Types";

interface TeamProps {
  children: any;
}

const TeamState = (props: TeamProps) => {
  
  const [state, dispatch] = useReducer(TeamReducer, initialState);

  const setLoading = () => {
    dispatch({ type: types.SET_LOADING });
  };

  const searchCountries = async () => {
    setLoading();
    // TODO
  }

  const searchPlayers = async (countryId: string) => {
    setLoading();
    // TODO
  }

  return (
    <TeamContext.Provider
      value={{
        countries: state.countries,
        players: state.players,
        teams: state.teams,
        loading: state.loading,
        searchCountries,
        searchPlayers
      }}
    >
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamState;