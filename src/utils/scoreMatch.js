const scoreMatch = (match, stats) => {
  let score = 0;
  const { team1, team2, sitOut } = match;

  // New teammates
  for (let [a, b] of [team1, team2]) {
    if (!stats[a].teammates.has(b)) score++;
    if (!stats[b].teammates.has(a)) score++;
  }

  // New opponents
  for (let p1 of team1) {
    for (let p2 of team2) {
      if (!stats[p1].opponents.has(p2)) score++;
      if (!stats[p2].opponents.has(p1)) score++;
    }
  }

  // Sit-out penalty
  if (sitOut) {
    score -= stats[sitOut].sitouts;
  }

  return score;
};

export default scoreMatch;
