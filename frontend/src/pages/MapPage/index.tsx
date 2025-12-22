import { useEffect } from "react";
import useAppContext from "../../contexts/AppContext/useAppContext";

export default function MapPage() {
  const { startGame, submitGuessAndDisplayResult, renderNextRound } =
    useAppContext();

  useEffect(() => {
    startGame();
  }, []);

  const handleButtonClick = () => {
    renderNextRound();
  };

  const handleSubmit = () => {
    submitGuessAndDisplayResult();
  };

  return (
    <div className="w-full h-screen p-4">
      <div id="panorama" className="w-full h-1/2" />
      <div id="map" className="w-full h-1/4 bg-purple-600 mt-4"></div>
      <button onClick={handleButtonClick} className="btn btn-primary">
        Atualizar Panorama
      </button>
      <button onClick={handleSubmit} className="btn btn-secondary">
        Submit guess
      </button>
    </div>
  );
}
