import Link from "next/link";
import { SimplePokemon } from "./single-pokemon";
import Image from "next/image";
import { IoHeart } from "react-icons/io5";
interface Props {
  pokemon: SimplePokemon;
}
const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          (
          <Image
            key={id}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
            alt={name}
            width={120}
            height={120}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <p className="text-sm text-gray-100"></p>
          <div className="mt-5">
            <Link
              href={`pokemons/${id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              See more info
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex"
          >
            <div className="text-red-600">
              <IoHeart />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Favorito{pokemon.id}
              </p>
              <p className="text-xs text-gray-500">View yours</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
