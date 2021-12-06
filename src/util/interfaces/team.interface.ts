import { PlayerInterface } from ".";

export interface TeamInterface {
  name: string;
  coach: PlayerInterface;
  players: { [key: number]: PlayerInterface };
}