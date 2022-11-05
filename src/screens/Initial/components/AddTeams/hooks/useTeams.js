import { v4 as createId } from "uuid";
import { useStepperContext } from "../../../../../components/Stepper/hooks";
import countries from "../../../../../data/countries.json";
import leagues from "../../../../../data/leagues.json";
import teamsJSON from "../../../../../data/teams.json";
import useList from "../../../../../hooks/useList";
import { getPreparesLeagues, getPreparesTeams } from "../../../../../utilities";

const countriesOptions = countries.map((country) => ({
  value: country,
  content: country,
}));
const leaguesStructure = getPreparesLeagues(leagues);
const teamsStructure = getPreparesTeams(teamsJSON);

const defaultCountry = countriesOptions[0].value;
const defaultLeague = leaguesStructure[defaultCountry][0].value;
const defaultTeam = teamsStructure[defaultCountry][defaultLeague][0].value;

const getDefaultTeam = () => ({
  id: createId(),
  country: defaultCountry,
  league: defaultLeague,
  team: defaultTeam,
});
const defaultTeams = [getDefaultTeam(), getDefaultTeam()];

const useTeams = () => {
  const { activeStepData, updateTempStepData } = useStepperContext();

  const {
    list: teams,
    updateItem: updateTeamData,
    addItem: addTeam,
    removeItem: removeTeam,
  } = useList(activeStepData ?? defaultTeams);

  function updateFieldTeam(index, field, valueProp) {
    let team = {};
    switch (field) {
      case "country":
        team = {
          ...teams[index],
          country: valueProp,
          league: leaguesStructure[valueProp][0].value,
          team: teamsStructure[valueProp][
            leaguesStructure[valueProp][0].value
          ][0].value,
        };
        break;
      case "league":
        team = {
          ...teams[index],
          league: valueProp,
          team: teamsStructure[teams[index].country][valueProp][0].value,
        };
        break;
      case "team":
        team = {
          ...teams[index],
          team: valueProp,
        };
        break;
      default:
        break;
    }
    updateTeamData(index, team);
  }

  function handleAddTeam() {
    addTeam(getDefaultTeam());
  }

  function getLeaguesOptions(index) {
    return leaguesStructure[teams[index].country];
  }

  function getTeamsOptions(index) {
    return teamsStructure[teams[index].country][teams[index].league];
  }

  return {
    teams,
    removeTeam,
    addTeam: handleAddTeam,
    getLeaguesOptions,
    getTeamsOptions,
    countriesOptions,
    updateTempStepData,
    updateFieldTeam,
  };
};

export default useTeams;
