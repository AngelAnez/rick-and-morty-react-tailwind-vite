import CharacterList from "./components/CharacterList";

function App() {
  return (
    <main className="bg-slate-900">
      <h1 className="text-white text-5xl font-bold text-center py-4">Personajes de Rick y Morty</h1>
      <CharacterList />
    </main>
  );
}

export default App;
