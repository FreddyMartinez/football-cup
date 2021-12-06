import { Fragment, useContext } from "react";
import TeamContext from "../../../context/teams/TeamContext";
import {
  RequiredAttackers,
  RequiredDefenders,
  RequiredGoalkeepers,
  RequiredMidfielders,
} from "../../../util/constants";
import "./NewTeam.css";

export const NewTeam = () => {
  const teamContext = useContext(TeamContext);
  const { name, coach, players, saveTeam, removePlayer } = teamContext;

  const saveCurrentTeam = () => {
    saveTeam && saveTeam();
  };

  const calcMissingPlayers = () => {
    const missingDefenders =
      RequiredDefenders -
      Object.values(players).filter(p => p.position === "Defender").length;
    const missingMidfielder =
      RequiredMidfielders -
      Object.values(players).filter(p => p.position === "Midfielder").length;
    const missingAttackers =
      RequiredAttackers -
      Object.values(players).filter(p => p.position === "Attacker").length;
    const missingGoalkeepers =
      RequiredGoalkeepers -
      Object.values(players).filter(p => p.position === "Goalkeeper").length;

    if (
      !coach ||
      missingDefenders > 0 ||
      missingAttackers > 0 ||
      missingMidfielder > 0 ||
      missingGoalkeepers > 0
    ) {
      return (
        <Fragment>
          Missing:
          {!coach && <span>Coach</span>}
          {missingDefenders > 0 && <span>{missingDefenders} defenders</span>}
          {missingMidfielder > 0 && (
            <span>{missingMidfielder} midfielders</span>
          )}
          {missingAttackers > 0 && <span>{missingAttackers} attackers</span>}
          {missingGoalkeepers > 0 && (
            <span>{missingGoalkeepers} goalkeepers</span>
          )}
        </Fragment>
      );
    } else {
      return (
        <div>
          <button className='btn btn-save-team' onClick={saveCurrentTeam}>
            Save Team
          </button>
        </div>
      );
    }
  };

  return (
    <div className='nt-container card'>
      <h4>Your Team: {name}</h4>
      <p>
        <span className='text-bold'>Coach:</span>{" "}
        {coach ? `${coach.name} from ${coach.nationality}` : "please choose one"}
      </p>
      <p>
        <span className='text-bold'>Players:</span>
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Position</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(players).map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.nationality}</td>
              <td>{player.position}</td>
              <td>
                <button
                  className='remove-btn'
                  onClick={() => removePlayer && removePlayer(player.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {calcMissingPlayers()}
    </div>
  );
};
