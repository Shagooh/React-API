import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navbar";
import { rickAndMortyData } from "./components/MiApi";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [resultados, setResultados] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (search === "") {
      setResultados(personajes);
    } else {
      const newResult = personajes.filter(
        (personaje) =>
          personaje.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          personaje.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
          personaje.species.toLowerCase().includes(e.target.value.toLowerCase()) ||
          personaje.gender.toLowerCase().startsWith(e.target.value.toLowerCase())
      );
      setResultados(newResult);
    }
  };

  useEffect(() => {
    rickAndMortyData(setPersonajes);
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <h1>Rick and Morty</h1>
      <input
        type="text"
        placeholder="Buscar personaje"
        onChange={handleSearch}
        value={search}
      />
      {
        <ol>
          {resultados.length > 0 ? (
            resultados.map((personaje) => {
              return (
                <li key={personaje.id}>
                  Nombre :{personaje.name} Estado :{personaje.status} Especie:{" "}
                  {personaje.species} Genero: {personaje.gender}
                </li>
              );
            })
          ) : (
            <h2></h2>
          )}
        </ol>
      }

  
    </>
  );
}

export default App;
