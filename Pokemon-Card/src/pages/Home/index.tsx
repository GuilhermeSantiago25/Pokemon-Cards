import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { useFetch } from "../../hooks/useFetch";
import { Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const { data, error, loading } = useFetch<Pokemon[]>("pokemon/", "get");
  return (
    <Container>
      <Box>
        <h1>Home</h1>
        <p>Lista de Pokemon</p>
        <p>
          {loading
            ? "Loading..."
            : error
            ? "Error"
            : data && data.results.map((pokemon:any) => <p>{pokemon.name}</p>)}
        </p>
      </Box>
    </Container>
  );
};

export default Home;
