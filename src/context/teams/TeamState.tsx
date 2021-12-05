import { useReducer } from "react";
import TeamContext, { initialState } from "./TeamContext";
import TeamReducer from "./TeamReducer";
import * as types from "../Types";
import { PlayerInterface } from "../../util/interfaces";

const TeamState = (props: { children: any }) => {
  const [state, dispatch] = useReducer(TeamReducer, initialState);

  const setTeamName = (name: string) => {
    dispatch({ type: types.SET_TEAM_NAME, payload: name})
  }

  const addPlayer = (player: PlayerInterface) => {
    dispatch({ type: types.ADD_PLAYER, payload: player})
  }
  const setCoach = (coach: PlayerInterface) => {
    dispatch({ type: types.SET_COACH, payload: coach})
  }

  const saveTeam = () => {
    // TODO save in localStorage
  }

  return (
    <TeamContext.Provider
      value={{
        name: state.name,
        players: state.players,
        coach: state.coach,
        addPlayer,
        setCoach,
        setTeamName,
        saveTeam
      }}
    >
      {props.children}
    </TeamContext.Provider>
  );
};

export default TeamState;