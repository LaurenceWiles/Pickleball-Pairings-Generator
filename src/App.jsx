import { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import PlayerList from "./components/PlayerList";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (name) => {
    setPlayers([...players, name]);
  };

  const removePlayer = (indexToRemove) => {
    setPlayers(players.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <h1>Pickleball Pairings Generator</h1>
      <PlayerInput onAddPlayer={addPlayer} players={players} />
      <PlayerList players={players} onRemovePlayer={removePlayer} />
    </>
  );
}

export default App;
