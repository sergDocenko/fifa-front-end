import React from "react";
import AddTeam from "./components/AddTeam/AddTeam";
import Button from "../../../../components/Button/Button";
import { useStepperContext } from "../../../../components/Stepper/hooks";
import useTeams from "./hooks/useTeams";
import "./add-teams.css";

const AddTeams = () => {
  const { updateTempStepData, activeStepData } = useStepperContext();
  const { teams, updateTeamData, addTeam, removeTeam } =
    useTeams(activeStepData);

  updateTempStepData(teams);

  console.log(teams);
  return (
    <div className="add-teams">
      {teams.map((team, index) => (
        <AddTeam
          index={index}
          defaultTeam={team}
          key={team.id}
          disabledRemoveButton={teams.length <= 2}
          removeTeam={removeTeam.bind(null, team.id)}
          updateTeamData={updateTeamData}
        />
      ))}

      <Button disabled={teams.length >= 20} onClick={addTeam}>
        Add team
      </Button>
    </div>
  );
};

export default AddTeams;
