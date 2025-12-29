import React, { useState } from "react";
import { createNewGameSession } from "../../../config/backendClient";

export default function StartGameSessionForm() {
  const [userName, setUserName] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const newGame = await createNewGameSession(userName);
      console.log("Nova sessão criada: ", newGame);
    } catch (error: unknown) {
      console.log("Ocorreu um erro na requisição: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="card bg-neutral text-neutral-content w-96 mt-8">
        <div className="card-body">
          <h2 className="card-title">Novo Jogo</h2>
          <p>Insira o seu username para iniciar o jogo:</p>
          <input
            type="text"
            placeholder="Digite aqui"
            className="input input-ghost w-full"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            disabled={isLoading}
          />
          <div className="justify-end card-actions">
            <button
              className="btn btn-primary w-full"
              type="submit"
              disabled={isLoading || userName.length === 0}
            >
              {isLoading ? "Carregando..." : "Iniciar"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
