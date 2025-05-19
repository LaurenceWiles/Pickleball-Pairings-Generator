import { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (name) => {
    setPlayers([...players, name]);
  };

  return (
    <>
      <h1>Pickleball Pairings Generator</h1>
      <PlayerInput onAddPlayer={addPlayer} players={players} />

      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
