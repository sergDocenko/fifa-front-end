import useElementsArray from "../../../../../hooks/useElementsArray";

function useTeams(teamsData) {
  const { elements, updateElementData, addElement, removElement } =
    useElementsArray(teamsData, getTeamDefault);

  return {
    teams: elements,
    updateTeamData: updateElementData,
    addTeam: addElement,
    removeTeam: removElement,
  };
}
export default useTeams;

const createId = (function (initId = 0) {
  let id = initId;
  return function () {
    return id++;
  };
})();

function getTeamDefault() {
  return {
    id: createId(),
    country: "ARGENTINA",
    league: "LIGA PROFESIONAL DE FÚTBOL",
    team: "Aldosivi",
  };
}
