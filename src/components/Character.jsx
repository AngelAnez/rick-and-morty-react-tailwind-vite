function Character({character}) {
  return (
    <section className="text-white text-center select-none hover:opacity-60">
      <img className="object-cover mx-auto rounded-full" src={character.image} alt={character.name}></img>
      <h2 className="text-xl">{character.name}</h2>
      <p className="text-md text-gray-400">{character.origin.name}</p>
    </section>
  );
}

export default Character;
