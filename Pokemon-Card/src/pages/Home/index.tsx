import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import { Result, Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const { data, error, loading } = useFetch<Result>("pokemon/", "get");
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  return (
    <Container>
      <Box>
        <h1>Pokedex</h1>
        <p>Lista de Pokemons</p>
        <p>
          {loading
            ? "Loading..."
            : error
            ? "Error"
            : data && data.results.map((pokemon: Pokemon) => <p>{pokemon.name}</p>)}
        </p>
      </Box>
    </Container>
  );
};

export default Home;
