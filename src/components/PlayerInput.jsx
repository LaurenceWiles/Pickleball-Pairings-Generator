import { useState } from "react";

const PlayerInput = ({ onAddPlayer }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed) {
      onAddPlayer(trimmed);
      setName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="player-input">
      <input
        type="text"
        placeholder="Enter player name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
};

export default PlayerInput;
