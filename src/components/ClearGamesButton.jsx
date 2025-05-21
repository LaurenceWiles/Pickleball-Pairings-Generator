const ClearGamesButton = ({ onClear }) => {
  return (
    <button onClick={onClear} className="clear-games-button">
      Clear Games
    </button>
  );
};

export default ClearGamesButton;
