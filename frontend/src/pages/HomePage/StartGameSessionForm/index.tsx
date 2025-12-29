export default function StartGameSessionForm() {
  return (
    <div className="card bg-neutral text-neutral-content w-96 mt-8">
      <div className="card-body">
        <h2 className="card-title">Novo Jogo</h2>
        <p>
          Insira o seu username para iniciar o jogo:
        </p>
        <input type="text" placeholder="Digite aqui" className="input input-ghost w-full" />
        <div className="justify-end card-actions">
          <button className="btn btn-primary w-full">Iniciar</button>
        </div>
      </div>
    </div>
  );
}
