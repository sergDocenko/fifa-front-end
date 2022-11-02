export function getPreparesLeagues(leaguesArray) {
  return leaguesArray.reduce((accum, league) => {
    if (!accum[league.country]) accum[league.country] = [];
    accum[league.country].push({
      value: league.league,
      content: league.league,
    });
    return accum;
  }, {});
}

export function getPreparesTeams(teamsArray) {
  return teamsArray.reduce((accum, team) => {
    // console.log(Array.isArray(team.team));
    if (!accum[team.country]) accum[team.country] = {};
    if (!accum[team.country][team.league])
      accum[team.country][team.league] = [];
    accum[team.country][team.league].push({
      value: team.team,
      content: team.team,
    });
    return accum;
  }, {});
}
