import { useReducer } from "react";
import PlayerContext, { initialState } from "./PlayerContext";
import PlayerReducer from "./PlayerReducer";
import * as types from "../Types";
import axios from "axios";
import { PlayerInterface } from "../../util/interfaces";
import { requestHeader, CoachRole, PlayerRole } from "../../util/constants";

const TeamState = (props: { children: any }) => {
  const [state, dispatch] = useReducer(PlayerReducer, initialState);

  const setLoading = () => {
    dispatch({ type: types.SET_LOADING });
  };

  const searchPlayers = async (teamId: number) => {
    setLoading();
    try {
      const axiosRes = await axios.get(
        `https://api.football-data.org/v2/teams/${teamId}`,
        { headers: requestHeader }
      );
      const players: PlayerInterface[] = axiosRes.data.squad;

      dispatch({
        type: types.GET_PLAYERS,
        payload: players.filter(
          p => p.role === CoachRole || p.role === PlayerRole
        ),
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: types.GET_COUNTRIES, payload: [] });
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        players: state.players,
        loading: state.loading,
        searchPlayers,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default TeamState;
