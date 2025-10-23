import { useState } from "react";
import "./App.css";

function App() {
  // Estado é um objeto com duas propriedades
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div className="container">
      <h1>useState com Objeto</h1>

      <form>
        <input
          type="text"
          placeholder="Primeiro nome"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />

        <input
          type="text"
          placeholder="Último nome"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>

      <h2>
        Nome completo: <span>{name.firstName} {name.lastName}</span>
      </h2>
    </div>
  );
}

export default App;
