import { useState } from "react";
import PlayerInput from "./components/PlayerInput";
import PlayerList from "./components/PlayerList";
import GenerateGamesButton from "./components/GenerateGamesButton";
import GamesDisplay from "./components/GamesDisplay";
import ClearGamesButton from "./components/ClearGamesButton";
import generatePairings from "./utils/generatePairings";
import "./App.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [games, setGames] = useState([]);

  const addPlayer = (name) => {
    setPlayers([...players, name]);
  };

  const removePlayer = (indexToRemove) => {
    setPlayers(players.filter((_, index) => index !== indexToRemove));
  };

  const handleGenerateGames = (players) => {
    const games = generatePairings(players);
    setGames(games);
  };

  const handleClearGames = () => {
    setGames([]);
  };

  return (
    <>
      <h1>Pickleball Pairings Generator</h1>
      <PlayerInput onAddPlayer={addPlayer} players={players} />
      <PlayerList players={players} onRemovePlayer={removePlayer} />
      <GenerateGamesButton players={players} onGenerate={handleGenerateGames} />
      <GamesDisplay games={games} />
      {games.length > 0 && <ClearGamesButton onClear={handleClearGames} />}
    </>
  );
}

export default App;
