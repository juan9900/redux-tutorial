import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokemonReducer from "../store/slices/pokemon/pokemonSlice";
import { todosApi } from "./apis";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
    [todosApi.reducerPath]: todosApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
