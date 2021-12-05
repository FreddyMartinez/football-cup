import { PlayerInterface } from "../../../util/playerInterface";
import "./PlayerCard.css";

const PlayerCard = ({ player }: { player: PlayerInterface }) => {
  return (
    <div className='card player-card'>
      <span>{player.name}</span>
      <span>Country: {player.country}</span>
      <span>Position: {player.position}</span>
      <button className="btn">Add to my team</button>
    </div>
  );
};

export default PlayerCard;
