import { TeamInterface } from "../../util/interfaces";
import "./TeamCard.css";

export const TeamCard = ({ team }: { team: TeamInterface }) => {
  return (
    <div className='card team-card'>
      <h4>{team.name || "No name team"}</h4>
      <p>
        <span className='text-bold'>Coach:</span>{" "}
        {team.coach.name} from {team.coach.nationality}
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(team.players).map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.nationality}</td>
              <td>{player.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
