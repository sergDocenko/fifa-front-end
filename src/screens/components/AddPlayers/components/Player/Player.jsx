import { useRef } from "react";
import Button from "../../../../../components/Button/Button";
import InputText from "../../../../../components/InputText/InputText";
import "./player.css";

const Player = (props) => {
  const {
    playerDefault,
    updatePlayerData,
    removePlayer,
    disabledRemoveButton,
  } = props;
  const player = useRef(playerDefault);

  function updatePlayerValid() {
    player.current.valid = player.current.name.length > 5 ? true : false;
  }

  function updatePlayerName(playerName) {
    player.current.name = playerName;
    updatePlayerValid();
  }

  function handleRemove() {
    removePlayer(playerDefault.id);
  }

  function handleOnBlur() {
    updatePlayerData(player.current);
  }

  return (
    <div className="player" onBlur={handleOnBlur}>
      <InputText
        defaultValue={playerDefault.name}
        getValue={updatePlayerName}
        className={"player__input-text"}
      />
      <Button disabled={disabledRemoveButton} onClick={handleRemove}>
        {" "}
        Remove{" "}
      </Button>
    </div>
  );
};

export default Player;
