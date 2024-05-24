import PokemonList from "@repo/ui/PokemonList";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl mb-5 border-b-2 italic font-bold">
        Second Application
      </h1>
      <PokemonList />
    </>
  );
}
