export default async function Page() {
  const pokemon = (await fetch("https://pokeapi.co/api/v2/pokemon").then(
    (res) => res.json()
  )) as { results: { name: string }[] };

  return (
    <div>
      <h1>Pokemon</h1>
      <ul>
        {pokemon.results.map((p) => (
          <li key={p.name}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
