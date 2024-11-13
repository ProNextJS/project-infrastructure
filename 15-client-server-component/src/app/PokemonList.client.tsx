"use client";
import { useState } from "react";

export interface Pokemon {
  id: number;
  name: string;
}

export default function ({
  pokemon: initialPokemon,
  getPage,
}: {
  pokemon: Pokemon[];
  getPage: (page: number) => Promise<Pokemon[]>;
}) {
  const [pokemon, setPokemon] = useState<Pokemon[]>(initialPokemon);
  const [page, setPage] = useState(0);

  function setPageAndFetch(page: number) {
    setPage(page);
    getPage(page).then(setPokemon);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">
        Pokemon List - Page {page + 1}
      </h1>
      <div className="flex gap-6">
        <button
          onClick={async () => setPageAndFetch(page - 1)}
          disabled={page === 0}
          className="px-6 py-2 bg-blue-500 text-white rounded-full text-2xl font-bold min-w-44"
        >
          Previous
        </button>
        <button
          onClick={async () => setPageAndFetch(page + 1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-full text-2xl font-bold min-w-44"
        >
          Next
        </button>
      </div>
      <ul className="text-3xl flex flex-wrap">
        {pokemon.map((pokemon) => (
          <li key={pokemon.name} className="mt-5 w-1/3">
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
