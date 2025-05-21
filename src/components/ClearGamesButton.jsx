const ClearGamesButton = ({ onClear }) => {
  return (
    <button onClick={onClear} className="clear-matches-button">
      Clear Games
    </button>
  );
};

export default ClearGamesButton;
