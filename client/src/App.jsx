import { useState } from "react";
import "./App.css";

// Mise à jour de src/App.jsx pour tester l'API
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch("/api/count");
        if (response.ok) {
          setCount(await response.json());
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchCount();
  }, []);

  return (
    <div>
      <h1>React + Vite</h1>
      <p>Compteur: {count !== null ? count : "Chargement..."}</p>
    </div>
  );
}

export default App;
