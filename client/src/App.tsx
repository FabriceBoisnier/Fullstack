import { useState } from "react";
import "./App.module.scss";

// Mise à jour de src/App.jsx pour tester l'API
import { useEffect } from "react";
// Update the import path below to the correct relative path to Test.tsx
import Test from "@pages/Test";


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
      <Test />
      
    </div>
  );
}

export default App;
