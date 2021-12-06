import { TeamInterface } from "./interfaces/team.interface";

const teamsKey = "my-football-teams"

export const getTeamsFromStorage = () => {
  const teamsInStorage = localStorage.getItem(teamsKey) || "[]";
  const myTeams: TeamInterface[] = JSON.parse(teamsInStorage);
  return myTeams;
}

export const saveInLocalStorage = (myTeams: TeamInterface[]) => {
  const teamsString = JSON.stringify(myTeams);
  localStorage.setItem(teamsKey, teamsString);
}