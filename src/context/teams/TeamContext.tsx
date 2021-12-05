import { createContext } from "react";
import { TeamStateIterface } from "./TeamReducer";

export const initialState: TeamStateIterface = {
  countries: [],
  players: [],
  teams: [],
  loading: false
};

const TeamContext = createContext<TeamStateIterface>(initialState);

export default TeamContext;
