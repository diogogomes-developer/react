"use client"
import { FormProvider, useForm } from "react-hook-form";
import { Child } from "./Child";
import { useGetPokemonByNameQuery } from "../react-redux-toolkit/pokemonApiSlice";

interface FormData {
  displayName: string;
}

export const Parent = () => {
  const formMethods = useForm<FormData>({
    defaultValues: {
      displayName: "Diogo",
    },
  });

  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  return (
    <FormProvider {...formMethods}>
      <Child />
      <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
    </FormProvider>
  );
};
