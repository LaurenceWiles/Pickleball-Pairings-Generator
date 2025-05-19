const GenerateGamesButton = ({ players, onGenerate }) => {
  const isValidCount = players.length >= 4;

  const handleClick = () => {
    if (isValidCount) {
      onGenerate(players);
    }
  };

  return (
    <div className="generate-button">
      <button onClick={handleClick} disabled={!isValidCount}>
        Generate Games
      </button>
      {!isValidCount && (
        <p className="warning">
          Please enter at least 4 players to generate games.
        </p>
      )}
    </div>
  );
};

export default GenerateGamesButton;
