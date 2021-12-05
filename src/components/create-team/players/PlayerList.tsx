import PlayerCard from "./PlayerCard";
import "./PlayerList.css";

export const PlayerList = () => {
  const players = [
    {
      name: "Unai Simón",
      country: "Spain",
      position: "goalkeeper",
    },
    {
      name: "Morata",
      country: "Spain",
      position: "Forward",
    },
  ];
  return (
    <div className='pl-containter'>
      {players.map((player, id) => (
        <PlayerCard key={id} player={player} />
      ))}
    </div>
  );
};
