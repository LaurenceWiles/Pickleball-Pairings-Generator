const GamesDisplay = ({ games }) => {
  if (games.length === 0) return null;

  return (
    <div className="games-display">
      <h2>Games</h2>
      <ul>
        {games.map((game, index) => (
          <li key={index} className="game-item">
            <strong className="team team-left">{game.team1.join(" + ")}</strong>
            <span className="vs">vs</span>
            <strong className="team team-right">
              {game.team2.join(" + ")}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesDisplay;
