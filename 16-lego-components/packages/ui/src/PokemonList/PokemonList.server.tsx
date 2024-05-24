import PokemonListClient from "./PokemonList.client";

export default async function PokemonList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();

  async function getPage(page: number) {
    "use server";
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}`
    );
    const data = await res.json();
    return data.results;
  }

  return <PokemonListClient pokemon={data.results} getPage={getPage} />;
}
