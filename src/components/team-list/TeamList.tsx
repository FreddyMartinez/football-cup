import { Fragment } from "react";
import { getTeamsFromStorage } from "../../util/util-functions";
import { TeamCard } from "./TeamCard";
import "./TeamList.css";

const TeamList = () => {
  const myTeams = getTeamsFromStorage();

  if (myTeams.length === 0) {
    return (<h4 className="text-center">You do not have teams created yet</h4>)
  }
  
  return (
    <Fragment>
      <h4 className="text-center">These are your previously saved teams</h4>
      <div className='teams-container'>
        {myTeams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </Fragment>
  );
};

export default TeamList;
