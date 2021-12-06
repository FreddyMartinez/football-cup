import { useContext } from "react";
import AlertContex from "../../../context/alert/AlertContext";
import TeamContext from "../../../context/teams/TeamContext";
import { CoachRole, MaxPeople } from "../../../util/constants";
import { PlayerInterface } from "../../../util/interfaces";
import "./PlayerCard.css";

const PlayerCard = ({ player }: { player: PlayerInterface }) => {
  const teamContext = useContext(TeamContext);
  const { addPlayer, setCoach, players } = teamContext;

  const alertContext = useContext(AlertContex);
  const { setAlert } = alertContext;

  const addPlayerOnClick = () => {
    if (player.role === CoachRole) {
      setCoach && setCoach(player);
      setAlert(`you chose ${player.name} as your coach`, "primary");
    } else if (!!players[player.id]) {
      setAlert(`${player.name} is already in your team`, "light");
    } else if (Object.values(players).length === MaxPeople) {
      setAlert(`you already have ${MaxPeople} in your team`, "danger");
    } else {
      const compatriots = Object.values(players).filter(
        p => p.nationality === player.nationality
      ).length;
      if (compatriots < 4) {
        addPlayer && addPlayer(player);
        setAlert(`${player.name} added to your team`, "primary");
      } else {
        setAlert(
          `you already have 4 players from ${player.nationality}`,
          "danger"
        );
      }
    }
  };

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
      <button className='btn add-btn' onClick={addPlayerOnClick}>
        Add to my team
      </button>
    </div>
  );
};

export default PlayerCard;
