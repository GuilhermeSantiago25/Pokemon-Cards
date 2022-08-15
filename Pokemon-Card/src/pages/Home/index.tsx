import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import { List, Details } from "../../components";
import { Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [pikachuCounter, setPikachuCounter] = useState(0);
  
  return (
    <Container
      fixed
      sx={{
        backgroundImage: pikachuCounter >= 3 ?
          "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg)" : null
      }}
    >
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
          <Details
            selectedPokemon={selectedPokemon}
            pikachuCounter={pikachuCounter}
            setPikachuCounter={setPikachuCounter}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
