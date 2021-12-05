export const requestHeader = {
  "X-Auth-Token": process.env.REACT_APP_API_TOKEN || "",
  "content-type": "application/json",
};

export const PlayerRole = "PLAYER";
export const CoachRole = "COACH";