import initializeStats from "./initializeStats";
import scoreMatch from "./scoreMatch";
import updateStats from "./updateStats";

const getAllPairs = (players) => {
  const pairs = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      pairs.push([players[i], players[j]]);
    }
  }
  return pairs;
};

const getAllValidMatches = (players) => {
  const pairs = getAllPairs(players);
  const matches = [];

  for (let i = 0; i < pairs.length; i++) {
    for (let j = i + 1; j < pairs.length; j++) {
      const [a1, a2] = pairs[i];
      const [b1, b2] = pairs[j];
      const allPlayers = new Set([a1, a2, b1, b2]);
      if (allPlayers.size === 4) {
        matches.push({
          team1: [a1, a2],
          team2: [b1, b2],
          players: [a1, a2, b1, b2],
        });
      }
    }
  }

  return matches;
};

const generatePairings = (players, maxMatches = 6) => {
  const allMatches = getAllValidMatches(players).map((match) => {
    const sitOuts = players.filter((p) => !match.players.includes(p));
    return sitOuts.length === 1 ? { ...match, sitOut: sitOuts[0] } : match;
  });

  const selected = [];
  const stats = initializeStats(players);

  while (selected.length < maxMatches && allMatches.length > 0) {
    let bestMatch = null;
    let bestScore = -Infinity;

    for (const match of allMatches) {
      const score = scoreMatch(match, stats);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = match;
      }
    }

    if (!bestMatch) break;

    selected.push(bestMatch);
    updateStats(bestMatch, stats);

    allMatches.splice(allMatches.indexOf(bestMatch), 1);
  }

  return selected;
};

export default generatePairings;
