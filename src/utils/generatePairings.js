const generatePairings = (players) => {
  const matches = [];

  if (players.length === 4) {
    const [A, B, C, D] = players;
    matches.push(
      { team1: [A, B], team2: [C, D] },
      { team1: [A, C], team2: [B, D] },
      { team1: [A, D], team2: [B, C] }
    );
  } else if (players.length === 5) {
    const [A, B, C, D, E] = players;
    matches.push(
      { team1: [A, B], team2: [C, D], sitOut: E },
      { team1: [A, C], team2: [D, E], sitOut: B },
      { team1: [B, C], team2: [A, E], sitOut: D },
      { team1: [B, D], team2: [A, C], sitOut: E },
      { team1: [C, E], team2: [A, D], sitOut: B },
      { team1: [C, D], team2: [B, E], sitOut: A }
    );
  } else {
    // Placeholder for >5 players
    matches.push({ team1: ["TBD"], team2: ["TBD"] });
  }

  return matches;
};

export default generatePairings;
