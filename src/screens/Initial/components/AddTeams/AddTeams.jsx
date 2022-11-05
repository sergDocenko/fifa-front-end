import Button from "../../../../components/Button/Button";
import Select from "../../../../components/Select/Select";
import "./add-teams.css";
import useTeams from "./hooks/useTeams";

const AddTeams = () => {
  const {
    teams,
    removeTeam,
    addTeam: handleAddTeam,
    getLeaguesOptions,
    getTeamsOptions,
    countriesOptions,
    updateTempStepData,
    updateFieldTeam,
  } = useTeams();

  updateTempStepData(teams);

  return (
    <div>
      <ul className="add-teams">
        {teams.map((team, index) => (
          <li className="add-teams__team" key={team.id}>
            <span>{`${index + 1}.`}</span>
            <Select
              options={countriesOptions}
              onChange={updateFieldTeam.bind(null, index, "country")}
              value={team.country}
            />
            <Select
              options={getLeaguesOptions(index)}
              onChange={updateFieldTeam.bind(null, index, "league")}
              value={team.league}
            />
            <Select
              options={getTeamsOptions(index)}
              onChange={updateFieldTeam.bind(null, index, "team")}
              value={team.team}
            />
            <Button
              disabled={teams.length <= 2}
              onClick={removeTeam.bind(null, index)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <Button disabled={teams.length >= 20} onClick={handleAddTeam}>
        Add team
      </Button>
    </div>
  );
};

export default AddTeams;
