import { ActionInterface, PlayerInterface } from "../../util/interfaces";
import * as types from "../Types";

export interface TeamStateIterface {
  name: string;
  players: PlayerInterface[];
  coach?: PlayerInterface;
  addPlayer?: (player: PlayerInterface) => any;
  setCoach?: (coach: PlayerInterface) => any;
  setTeamName?: (name: string) => any;
  saveTeam?: () => any;
}

const TeamReducer = (state: TeamStateIterface, action: ActionInterface) => {
  switch (action.type) {
    case types.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload]
      };

    case types.SET_COACH:
      return {
        ...state,
        coach: action.payload
      };

    case types.SET_TEAM_NAME:
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

export default TeamReducer;