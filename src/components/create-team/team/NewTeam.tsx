import { Fragment } from "react";
import "./NewTeam.css";

export const NewTeam = () => {
  const players: any[] = [
    {
      name: "Cristiano",
      country: "Portugal",
      position: "attacker",
    },
  ];

  const calcMissingPlayers = () => {
    return (
      <Fragment>
        Missing:
        <ul>
          <li>n defenders</li>
          <li>n midfielders</li>
          <li>n attackers</li>
          <li>n goalkeepers</li>
        </ul>
      </Fragment>
    );
  }

  return (
    <div className='nt-container'>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.country}</td>
              <td>{player.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {calcMissingPlayers()}
    </div>
  );
};
