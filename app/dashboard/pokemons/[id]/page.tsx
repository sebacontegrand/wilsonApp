interface Props {
  params: { id: string };
}

const getPokemon = async (id: string) => {
  console.log("%c Line:5 🌶 id", "color:#e41a6a", id);
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "default",
  }).then((res) => res.json());
  console.log(pokemon);
  return pokemon;
};
const PokemonPage = async ({ params }: Props) => {
  const pokemon = await getPokemon(params.id);
  return (
    <div>
      <h1>Pokemon: {params.id}</h1>
      <div>{JSON.stringify(pokemon)}</div>
    </div>
  );
};

export default PokemonPage;
