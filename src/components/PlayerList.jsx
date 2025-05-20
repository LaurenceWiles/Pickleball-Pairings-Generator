const PlayerList = ({ players, onRemovePlayer }) => {
  if (players.length === 0) return <p>No players entered</p>;

  return (
    <div className="player-list">
      <h2>Players</h2>
      <ul>
        {players.map((name, index) => (
          <li key={index} className="player-item">
            {name}
            <button
              onClick={() => onRemovePlayer(index)}
              className="remove-btn"
              aria-label={`Remove ${name}`}
              title={`Remove ${name}`}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
