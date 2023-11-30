import { playerData } from "../utils/playerData";
import Player from "./Player";


const list = playerData.map((player) => {
  return <Player key={player.id} data={player} />;
});

function PlayerList() {
  return <ul>{list}</ul>;
}

export default PlayerList;
