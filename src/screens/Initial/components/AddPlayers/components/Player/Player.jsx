import { useRef } from "react";
import Button from "../../../../../../components/Button/Button";
import InputText from "../../../../../../components/InputText/InputText";
import "./player.css";

const Player = (props) => {
  const {
    playerDefault,
    updatePlayerData,
    removePlayer,
    disabledRemoveButton,
  } = props;
  const player = useRef(playerDefault);

  function updatePlayerName(playerName) {
    player.current.name = playerName;
  }

  function handleOnBlur() {
    updatePlayerData(player.current);
  }

  return (
    <div className="player" onBlur={handleOnBlur}>
      <InputText
        value={playerDefault.name}
        onChange={updatePlayerName}
        className={"player__input-text"}
      />
      <Button disabled={disabledRemoveButton} onClick={removePlayer}>
        Remove
      </Button>
    </div>
  );
};

export default Player;
