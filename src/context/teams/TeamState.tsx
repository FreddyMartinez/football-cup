import { useReducer } from "react";
import TeamContext, { initialState } from "./TeamContext";
import TeamReducer from "./TeamReducer";
import * as types from "../Types";
import { PlayerInterface, TeamInterface } from "../../util/interfaces";
import { getTeamsFromStorage, saveInLocalStorage } from "../../util/util-functions";

const TeamState = (props: { children: any }) => {
  const [state, dispatch] = useReducer(TeamReducer, initialState);

  const setTeamName = (name: string) => {
    dispatch({ type: types.SET_TEAM_NAME, payload: name})
  }

  const addPlayer = (player: PlayerInterface) => {
    dispatch({ type: types.ADD_PLAYER, payload: player})
  }

  const removePlayer = (playerId: number) => {
    delete state.players[playerId];
    dispatch({ type: types.REMOVE_PLAYER, payload: state.players})
  }

  const setCoach = (coach: PlayerInterface) => {
    dispatch({ type: types.SET_COACH, payload: coach})
  }

  const saveTeam = () => {
    const myTeams = getTeamsFromStorage();
    const newTeam: TeamInterface = {
      name: state.name,
      players: state.players,
      coach: state.coach,
    };
    myTeams.push(newTeam);
    saveInLocalStorage(myTeams);
    // show alert or something
    dispatch({ type: types.SAVE_TEAM });
  };

  return (
    <TeamContext.Provider
      value={{
        name: state.name,
        players: state.players,
        coach: state.coach,
        addPlayer,
        setCoach,
        setTeamName,
        removePlayer,
        saveTeam
      }}
    >
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamState;