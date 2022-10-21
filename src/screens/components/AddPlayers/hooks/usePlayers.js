import { useState } from "react";

function usePlayers(playersData) {
  const playersInitial = playersData
    ? playersData
    : [getPlayerDefault(), getPlayerDefault()];
  const [players, setPlayers] = useState(playersInitial);

  function updatePlayerData(player) {
    const tempPlayers = [...players];
    const index = getIndex(players, player.id);
    tempPlayers[index] = player;
    setPlayers(tempPlayers);
  }

  function addPlayer() {
    setPlayers([...players, getPlayerDefault()]);
  }

  function removePlayer(id) {
    setPlayers(players.filter((player) => player.id !== id));
  }

  return {
    players,
    updatePlayerData,
    addPlayer,
    removePlayer,
  };
}

export default usePlayers;

const createId = (function (initId = 0) {
  let id = initId;
  return function () {
    return id++;
  };
})();

function getIndex(array, id) {
  return array.findIndex((player) => player.id === id);
}

const getPlayerDefault = () => {
  return { name: "", id: createId(), valid: false };
};
