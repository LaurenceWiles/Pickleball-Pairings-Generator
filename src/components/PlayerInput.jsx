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
      />
      <button type="submit">Add Player</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default PlayerInput;
