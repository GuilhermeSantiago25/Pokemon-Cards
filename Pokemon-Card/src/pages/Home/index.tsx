import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import List from "../../components/List";
import { Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  console.log(selectedPokemon);
  return (
    <Container>
      <Box sx={{
        display: "flex",
      }} >
        <Box>
          <h1>Pokedex</h1>
          <p>Lista de Pokemons</p>
          <List setSelectedPokemon={setSelectedPokemon} />
        </Box>
        <Box>
          <h1>Detalhes</h1>
          <p>Detalhes do Pokemon</p>
          <p>{selectedPokemon?.name}</p>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
