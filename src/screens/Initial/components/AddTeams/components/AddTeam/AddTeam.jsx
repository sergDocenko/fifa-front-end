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
const defaultTeam = {
  country: "ARGENTINA",
  league: "LIGA PROFESIONAL DE FÚTBOL",
  team: "Aldosivi",
};

const AddTeam = () => {
  const [team, setTeam] = useState(defaultTeam);

  function getSelectedCountry(value) {
    const league = leaguesStructure[value][0].value;
    setTeam({
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

  return (
    <div className="add-team">
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
      <Button>Remove</Button>
    </div>
  );
};

export default AddTeam;
