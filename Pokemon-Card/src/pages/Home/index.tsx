import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import {List, Details} from "../../components";
import { Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  console.log(selectedPokemon);
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <h1>Pokedex</h1>
          <p>Lista de Pokemons</p>
          <List setSelectedPokemon={setSelectedPokemon} />
        </Box>
        <Box>
          <h1>Detalhes</h1>
          <p>Detalhes do Pokemon</p>
          <Details selectedPokemon={selectedPokemon}/>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
