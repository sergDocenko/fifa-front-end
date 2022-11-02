import Button from "../../../../components/Button/Button";
import { useStepperContext } from "../../../../components/Stepper/hooks";
import "./addPlayers.css";
import Player from "./components/Player/Player";
import usePlayers from "./hooks/usePlayers";

const AddPlayers = () => {
  const { updateTempStepData, activeStepData } = useStepperContext();
  const { players, updatePlayerData, addPlayer, removePlayer } =
    usePlayers(activeStepData);

  updateTempStepData(players);
  return (
    <div className={"add-players"}>
      <div className="add-players__player-block">
        {players.map((player, index) => (
          <Player
            key={player.id}
            index={index}
            disabledRemoveButton={players.length <= 2}
            removePlayer={removePlayer.bind(null, player.id)}
            updatePlayerData={updatePlayerData}
            playerDefault={player}
          />
        ))}
      </div>

      <Button disabled={players.length >= 10} onClick={addPlayer}>
        Add one more Player
      </Button>
    </div>
  );
};

export default AddPlayers;
