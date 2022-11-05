import { v4 as createId } from "uuid";
import Button from "../../../../components/Button/Button";
import { useStepperContext } from "../../../../components/Stepper/hooks";
import useList from "../../../../hooks/useList";
import "./addPlayers.css";
import Player from "./components/Player/Player";

const defaultPlayers = [getDefaultPlayer(), getDefaultPlayer()];

const AddPlayers = () => {
  const { updateTempStepData, activeStepData } = useStepperContext();
  const {
    list: players,
    updateItem: updatePlayerData,
    addItem: addPlayer,
    removeItem: removePlayer,
  } = useList(activeStepData ?? defaultPlayers);

  updateTempStepData(players);

  function handleAddPlayer() {
    addPlayer(getDefaultPlayer());
  }
  return (
    <div className={"add-players"}>
      <div className="add-players__player-block">
        {players.map((player, index) => (
          <Player
            key={player.id}
            index={index}
            disabledRemoveButton={players.length <= 2}
            removePlayer={removePlayer.bind(null, index)}
            updatePlayerData={updatePlayerData}
            playerDefault={player}
          />
        ))}
      </div>
      <Button disabled={players.length >= 10} onClick={handleAddPlayer}>
        Add one more Player
      </Button>
    </div>
  );
};

export default AddPlayers;

function getDefaultPlayer() {
  return { name: "", id: createId() };
}
