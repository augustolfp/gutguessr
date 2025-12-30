import { useState } from "react";
import { api } from "../config/backendClient";
import type { GameSession } from "../types";

export default function useSinglePlayerSession() {
  const [gameSession, setGameSession] = useState<GameSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const createNewGameSession = async (playerName: string) => {
    try {
      setErrorMessage(null);
      setIsLoading(true);
      const result = await api.post<GameSession>("/game-sessions", {
        playerName,
      });

      setGameSession(result.data);
    } catch (error: unknown) {
      console.log("Erro: ", error);
      setErrorMessage("Ocorreu um erro ao criar uma nova partida.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createNewGameSession,

    gameSession,
    isLoading,
    errorMessage,
  };
}
