import { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (name) => {
    const lowercaseNames = players.map((player) => player.toLowerCase());
    if (!lowercaseNames.includes(name.toLowerCase())) {
      setPlayers([...players, name]);
    } else {
      alert(`"${name}" is already in the list.`);
    }
  };

  return (
    <>
      <h1>Pickleball Pairings Generator</h1>
      <PlayerInput onAddPlayer={addPlayer} />
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
