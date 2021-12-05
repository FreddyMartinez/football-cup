import { createContext } from "react";
import { PlayerStateIterface } from "./PlayerReducer";

export const initialState: PlayerStateIterface = {
  players: [],
  loading: false
};

const PlayerContext = createContext<PlayerStateIterface>(initialState);

export default PlayerContext;
