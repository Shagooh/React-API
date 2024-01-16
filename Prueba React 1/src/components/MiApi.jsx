const rickAndMortyData = async (setPersonajes) => {
    const apiUrl = "https://rickandmortyapi.com/api/character?";
  
    try {
      const respuesta = await fetch(apiUrl);
      const data = await respuesta.json();
      setPersonajes(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  
  export { rickAndMortyData };