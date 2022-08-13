import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import { List, Details } from "../../components";
import { Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  return (
    <Container fixed>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ height: "100vh", width: "100vh" }}
      >
        <Box marginX={1}>
          <List setSelectedPokemon={setSelectedPokemon} />
        </Box>
        <Box marginX={1}>
          <Details selectedPokemon={selectedPokemon} />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
