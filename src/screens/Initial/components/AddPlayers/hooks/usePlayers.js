import useElementsArray from "../../../../../hooks/useElementsArray";

function usePlayers(playersData) {
  const { elements, updateElementData, addElement, removElement } =
    useElementsArray(playersData, getPlayerDefault);

  return {
    players: elements,
    updatePlayerData: updateElementData,
    addPlayer: addElement,
    removePlayer: removElement,
  };
}

export default usePlayers;

const createId = (function (initId = 0) {
  let id = initId;
  return function () {
    return id++;
  };
})();

const getPlayerDefault = () => {
  return { name: "", id: createId() };
};

// function getIndexFromId(array, id) {
//   return array.findIndex((player) => player.id === id);
// }

// _________________________________________________
// const playersInitial = playersData
//   ? playersData
//   : [getPlayerDefault(), getPlayerDefault()];
// const [players, setPlayers] = useState(playersInitial);

// function updatePlayerData(playerProps) {
//   const tempPlayers = [...players];
//   const index = getIndexFromId(tempPlayers, playerProps.id);
//   if (tempPlayers[index].name !== playerProps.name) {
//     tempPlayers[index] = playerProps;
//     setPlayers(tempPlayers);
//   }
// }

// function addPlayer() {
//   setPlayers([...players, getPlayerDefault()]);
// }

// function removePlayer(id) {
//   setPlayers(players.filter((player) => player.id !== id));
// }
