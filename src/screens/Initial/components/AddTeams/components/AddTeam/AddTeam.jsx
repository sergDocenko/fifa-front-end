import React, { useState } from "react";
import Select from "../../../../../../components/Select/Select";
import countries from "../../../../../../data/countries.json";
import leagues from "../../../../../../data/leagues.json";
import teams from "../../../../../../data/teams.json";
import Button from "../../../../../../components/Button/Button";
import "./add-team.css";
import {
  getPreparesLeagues,
  getPreparesTeams,
} from "../../../../../../utilities";

const countriesOptions = countries.map((country) => ({
  value: country,
  content: country,
}));

const leaguesStructure = getPreparesLeagues(leagues);

const teamsStructure = getPreparesTeams(teams);

const AddTeam = (props) => {
  const {
    defaultTeam,
    updateTeamData,
    disabledRemoveButton,
    removeTeam,
    index,
  } = props;
  const [team, setTeam] = useState(defaultTeam);

  function getSelectedCountry(value) {
    const league = leaguesStructure[value][0].value;
    setTeam({
      ...team,
      country: value,
      league: league,
      team: teamsStructure[value][league][0].value,
    });
  }

  function getSelectedLeague(value) {
    setTeam({
      ...team,
      league: value,
      team: teamsStructure[team.country][value][0].value,
    });
  }

  function getSelectedTeam(value) {
    setTeam({ ...team, team: value });
  }

  function handleOnBlur() {
    updateTeamData(team);
  }
  return (
    <div className="add-team" onBlur={handleOnBlur}>
      <span>{`${index + 1}.`}</span>
      <Select
        options={countriesOptions}
        onChange={getSelectedCountry}
        value={team.country}
      />
      <Select
        options={leaguesStructure[team.country]}
        onChange={getSelectedLeague}
        value={team.league}
      />
      <Select
        options={teamsStructure[team.country][team.league]}
        onChange={getSelectedTeam}
        value={team.team}
      />
      <Button disabled={disabledRemoveButton} onClick={removeTeam}>
        Remove
      </Button>
    </div>
  );
};

export default AddTeam;
