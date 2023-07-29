import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0, isNext = true) => {
  const setNextPage = () => {
    return isNext ? page + 1 : page - 1;
  };
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // TODO: Realizar peticion HTTP
    // const res = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}}`
    // );
    // const data = await res.json();
    const resp = await pokemonApi.get(
      `/pokemon?limit=10&offset=${(isNext ? page : page - 2) * 10}`
    );
    const nextPage = setNextPage();
    dispatch(
      setPokemons({
        pokemons: resp.data.results,
        page: nextPage,
      })
    );
  };
};
