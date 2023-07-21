import { useState } from "react";
import Home from "./components/Home";
import GamePlay from "./components/GamePlay";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlaying = () => {
    setIsPlaying((prev) => !prev);
  };
  return <>{isPlaying ? <GamePlay /> : <Home toggle={togglePlaying} />}</>;
}

export default App;
