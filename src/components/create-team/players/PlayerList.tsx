import { Fragment, useContext, useEffect, useState } from "react";
import PlayerContext from "../../../context/players/PlayerContext";
import { CoachRole } from "../../../util/constants";
import { PlayerInterface } from "../../../util/interfaces";
import PlayerCard from "./PlayerCard";
import "./PlayerList.css";

export const PlayerList = () => {
  const playerContext = useContext(PlayerContext);
  const { loading, players } = playerContext;

  const [positionFilter, setPositionFilter] = useState<string>("");
  const [filteredPlayers, setFilteredPlayers] =
    useState<PlayerInterface[]>(players);

  const positions: { [key: string]: boolean } = {};
  players.forEach(p => {
    if (!!p.position) {
      positions[p.position] = true;
    }
  });
  positions["Coach"] = true;

  const filterByPosition = (newFilter: string) => {
    if (newFilter === "") {
      setFilteredPlayers(players);
    } else {
      const filtered =
        newFilter === "Coach"
          ? players.filter(p => p.role === CoachRole)
          : players.filter(p => p.position === newFilter);
      setFilteredPlayers(filtered);
    }
    setPositionFilter(newFilter);
  };

  useEffect(() => {
    filterByPosition(positionFilter);
    // eslint-disable-next-line
  }, [players]);

  if (loading) {
    return <p>Loading</p>;
  } else if (!players || players.length === 0) {
    return <div>Please choose a country</div>;
  }

  return (
    <Fragment>
      <div className='position-filter'>
        <label htmlFor='positionFilter'>Filter by position</label>
        <select
          value={positionFilter}
          onChange={e => filterByPosition(e.target.value)}
        >
          <option value=''>All</option>
          {Object.keys(positions).map((position, index) => (
            <option key={index} value={position}>
              {position}
            </option>
          ))}
        </select>
      </div>
      <div className='pl-containter'>
        {filteredPlayers.map((player, id) => (
          <PlayerCard key={id} player={player} />
        ))}
      </div>
    </Fragment>
  );
};
