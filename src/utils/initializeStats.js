const initializeStats = (players) => {
  const stats = {};
  for (const p of players) {
    stats[p] = {
      teammates: new Set(),
      opponents: new Set(),
      sitouts: 0,
    };
  }
  return stats;
};

export default initializeStats;
