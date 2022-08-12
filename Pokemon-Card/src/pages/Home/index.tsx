import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import  List  from "../../components/List"
import { Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  console.log(selectedPokemon)
  return (
    <Container>
      <Box>
        <h1>Pokedex</h1>
        <p>Lista de Pokemons</p>
        <List setSelectedPokemon={setSelectedPokemon}/>
      </Box>
    </Container>
  );
};

export default Home;
