export const requestHeader = {
  "X-Auth-Token": process.env.REACT_APP_API_TOKEN || "",
  "content-type": "application/json",
};

export const PlayerRole = "PLAYER";
export const CoachRole = "COACH";

export const RequiredDefenders = 4;
export const RequiredMidfielders = 4;
export const RequiredAttackers = 2;
export const RequiredGoalkeepers = 2;
export const MaxPeople = 16;
