import { useContext } from "react";
import TeamContext from "../../../context/teams/TeamContext";
import { CoachRole } from "../../../util/constants";
import { PlayerInterface } from "../../../util/interfaces";
import "./PlayerCard.css";

const PlayerCard = ({ player }: { player: PlayerInterface }) => {
  const teamContext = useContext(TeamContext)
  const { addPlayer, setCoach } = teamContext;

  const addPlayerOnClick = () => {
    if (player.role === CoachRole) {
      setCoach && setCoach(player)
    } else {
      addPlayer && addPlayer(player)
    }
  }

  return (
    <div className='card player-card'>
      <img src='./player.jpg' alt='' />
      <span>{player.name}</span>
      <span>Country: {player.nationality}</span>
      {player.role === CoachRole ? (
        <span>Coach</span>
      ) : (
        <span>Position: {player.position}</span>
      )}
      <button className='btn add-btn' onClick={addPlayerOnClick}>Add to my team</button>
    </div>
  );
};

export default PlayerCard;
