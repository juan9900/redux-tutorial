import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, startLoadingPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemon);

  return (
    <>
      <h1>Pokemon App</h1>
      <hr />
      <h2>Loading: {isLoading ? "Yes" : "No"}</h2>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>

      <h2>Current page: {page}</h2>
      <button
        disabled={isLoading || page <= 1}
        onClick={() => dispatch(getPokemons(page, false))}
      >
        Prev page
      </button>

      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page, true))}
      >
        Next page
      </button>
    </>
  );
};
