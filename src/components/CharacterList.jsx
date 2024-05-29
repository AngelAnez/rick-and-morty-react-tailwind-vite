import { useState, useEffect } from "react";
import Character from "./Character";

function NavBar({page, setPage}) {
  return <nav className="text-white px-10 flex justify-between text-center">
    <button className="bg-red-600 py-1 px-3 rounded-lg hover:bg-red-800" onClick={() => setPage(page == 1 ? page : page - 1)}>Anterior</button>
    <h3>Página {page}</h3>
    <button className="bg-green-600 py-1 px-3 rounded-lg hover:bg-green-800" onClick={() => setPage(page + 1)}>Siguiente</button>
  </nav>;
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setCharacters(data.results);
      setLoading(false);
    }

    fetchData();
  }, [page]);

  return (
    <div className="flex flex-col justify-center">

    <NavBar page={page} setPage={setPage}/>

      {loading ? (
        <h1 className="text-white text-2xl text-center">Loading...</h1>
      ) : (
        <article className="grid grid-cols-5 gap-10 p-10 mx-auto">
          {characters.map((character) => {
            return <Character key={character.id} character={character} />;
          })}
        </article>
      )}

    <NavBar page={page} setPage={setPage}/>
    </div>
  );
}

export default CharacterList;
