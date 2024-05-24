import React from "react";

export default async function Pokemon({ id }: { id: number }) {
  const pokemon = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id || 1}`
  ).then((res) => res.json());

  return (
    <div className="text-3xl">
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
    </div>
  );
}
