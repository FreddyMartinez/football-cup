import { ActionInterface, PlayerInterface } from "../../util/interfaces";
import * as types from "../Types";


export interface PlayerStateIterface {
  players: PlayerInterface[];
  loading: boolean;
  searchPlayers?: (id: number) => any;
}

const PlayerReducer = (state: PlayerStateIterface, action: ActionInterface) => {
  switch (action.type) {
    case types.GET_PLAYERS:
      return {
        ...state,
        players: action.payload,
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

export default PlayerReducer;