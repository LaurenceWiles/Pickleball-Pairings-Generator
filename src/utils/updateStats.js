const updateStats = (match, stats) => {
  const { team1, team2, sitOut } = match;

  // Teammates
  for (let [a, b] of [team1, team2]) {
    stats[a].teammates.add(b);
    stats[b].teammates.add(a);
  }

  // Opponents
  for (let p1 of team1) {
    for (let p2 of team2) {
      stats[p1].opponents.add(p2);
      stats[p2].opponents.add(p1);
    }
  }

  // Sit-outs
  if (sitOut) {
    stats[sitOut].sitouts++;
  }
};

export default updateStats;
