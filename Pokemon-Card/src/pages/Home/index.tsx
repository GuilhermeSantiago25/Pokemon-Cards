import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import  List  from "../../components/List"

const Home: React.FC = () => {
  return (
    <Container>
      <Box>
        <h1>Pokedex</h1>
        <p>Lista de Pokemons</p>
        <List />
      </Box>
    </Container>
  );
};

export default Home;
