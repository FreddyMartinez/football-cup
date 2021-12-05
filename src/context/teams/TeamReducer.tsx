import * as types from "../Types";

interface ActionInterface {
  type: string,
  payload?: any
}

export interface TeamStateIterface {
  countries: any[];
  players: any[];
  teams: any[];
  loading: boolean;
  searchCountries?: () => any;
  searchPlayers?: (id: string) => any;
}

const TeamReducer = (state: TeamStateIterface, action: ActionInterface) => {
  switch (action.type) {
    case types.GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };

    case types.GET_PLAYERS:
      return {
        ...state,
        player: action.payload,
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

export default TeamReducer;