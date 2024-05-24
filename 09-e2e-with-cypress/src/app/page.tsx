export default async function Home() {
  const pokemon = (await fetch("https://pokeapi.co/api/v2/pokemon").then(
    (res) => res.json()
  )) as { results: { name: string }[] };

  return (
    <div className="bg-black text-white p-5">
      <h1>Pokemon</h1>
      <ul>
        {pokemon.results.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
