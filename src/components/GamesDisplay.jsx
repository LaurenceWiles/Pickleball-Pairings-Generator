const GamesDisplay = ({ games }) => {
  if (games.length === 0) return null;

  return (
    <div className="game-display">
      <h2>Games</h2>
      <ol>
        {games.map((game, index) => (
          <li key={index}>
            <strong>{game.team1.join(" + ")}</strong> vs{" "}
            <strong>{game.team2.join(" + ")}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GamesDisplay;
