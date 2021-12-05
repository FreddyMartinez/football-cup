import { createContext } from "react";
import { TeamStateIterface } from "./TeamReducer";

export const initialState: TeamStateIterface = {
  name: "",
  players: []
};

const TeamContext = createContext<TeamStateIterface>(initialState);

export default TeamContext;
