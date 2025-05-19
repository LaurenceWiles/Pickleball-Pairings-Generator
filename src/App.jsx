import { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import PlayerList from "./components/PlayerList";
import GenerateGamesButton from "./components/GenerateGamesButton";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (name) => {
    setPlayers([...players, name]);
  };

  const removePlayer = (indexToRemove) => {
    setPlayers(players.filter((_, index) => index !== indexToRemove));
  };

  const generateGames = (players) => {
    // Temporary placeholder
    console.log("Generating games for:", players);
  };

  return (
    <>
      <h1>Pickleball Pairings Generator</h1>
      <PlayerInput onAddPlayer={addPlayer} players={players} />
      <PlayerList players={players} onRemovePlayer={removePlayer} />
      <GenerateGamesButton players={players} onGenerate={generateGames} />
    </>
  );
}

export default App;
