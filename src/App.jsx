import { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import PlayerList from "./components/PlayerList";
import GenerateGamesButton from "./components/GenerateGamesButton";
import MatchDisplay from "./components/MatchDisplay";
import generatePairings from "./utils/generatePairings";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);

  const addPlayer = (name) => {
    setPlayers([...players, name]);
  };

  const removePlayer = (indexToRemove) => {
    setPlayers(players.filter((_, index) => index !== indexToRemove));
  };

  const generateGames = (players) => {
    const games = generatePairings(players);
    setMatches(games);
  };

  return (
    <>
      <h1>Pickleball Pairings Generator</h1>
      <PlayerInput onAddPlayer={addPlayer} players={players} />
      <PlayerList players={players} onRemovePlayer={removePlayer} />
      <GenerateGamesButton players={players} onGenerate={generateGames} />
      <MatchDisplay matches={matches} />
    </>
  );
}

export default App;
