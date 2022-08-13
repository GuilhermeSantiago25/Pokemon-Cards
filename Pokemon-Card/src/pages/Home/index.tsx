import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import {List, Details} from "../../components";
import { Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  return (
    <Container fixed>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <List setSelectedPokemon={setSelectedPokemon} />
        </Box>
        <Box>
          <Details selectedPokemon={selectedPokemon}/>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
