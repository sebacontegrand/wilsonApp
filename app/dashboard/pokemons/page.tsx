import PokemonGrid from "@/app/dashboard/interfaces/pokemon-grid";
import { PokemonResponse } from "@/app/dashboard/interfaces/pokemons-interfaces";
import { SimplePokemon } from "@/app/dashboard/interfaces/single-pokemon";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
