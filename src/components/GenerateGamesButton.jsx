const GenerateGamesButton = ({ players, onGenerate }) => {
  const isValidCount = players.length >= 4;

  const handleClick = () => {
    if (isValidCount) {
      onGenerate(players);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={!isValidCount}
        className="generate-games-button"
      >
        Generate Games
      </button>
      {!isValidCount && (
        <p className="warning">
          Please enter at least 4 players to generate games.
        </p>
      )}
    </>
  );
};

export default GenerateGamesButton;
