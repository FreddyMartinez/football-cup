import React, { useReducer } from "react";
import TeamContext, { initialState } from "./TeamContext";
import TeamReducer from "./TeamReducer";
import * as types from "../Types";
import axios from "axios";
import { CountryInterface } from "../../util/country.interface";
import { PlayerInterface } from "../../util/playerInterface";

const requestHeader = {
  "X-Auth-Token": process.env.REACT_APP_API_TOKEN || "",
  "content-type": "application/json",
};

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
  }

  const searchPlayers = async (teamId: number) => {
    setLoading();
    try {
      const axiosRes = await axios.get(
        `https://api.football-data.org/v2/teams/${teamId}`,
        { headers: requestHeader }
      );
      const players: PlayerInterface[] = axiosRes.data.squad;
      console.log(players);
      
      dispatch({ type: types.GET_PLAYERS, payload: players });
    } catch (error) {
      console.log(error)
      dispatch({ type: types.GET_COUNTRIES, payload: [] });
    }
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