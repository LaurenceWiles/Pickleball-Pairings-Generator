import { useState } from "react";

const PlayerInput = ({ onAddPlayer, players }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();

    if (!trimmed) {
      setError("Name cannot be empty.");
      return;
    }

    const isDuplicate = players.some(
      (player) => player.toLowerCase() === trimmed.toLowerCase()
    );

    if (isDuplicate) {
      setError("This player is already in the list.");
      return;
    }

    onAddPlayer(trimmed);
    setName("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="player-input">
      <input
        type="text"
        placeholder="Enter player name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          if (error) setError("");
        }}
        className="player-input-field"
      />
      <button type="submit" className="add-player-button">
        Add Player
      </button>
      {error && <div className="toast">{error}</div>}
    </form>
  );
};

export default PlayerInput;
