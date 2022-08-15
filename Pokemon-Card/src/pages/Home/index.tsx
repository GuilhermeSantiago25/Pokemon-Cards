import React, { useState } from "react";
import { Container, Box, useMediaQuery } from "@mui/material";
import { List, Details } from "../../components";
import { Pokemon } from "../../types/@types";

const Home: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [pikachuCounter, setPikachuCounter] = useState(0);
  const matches = useMediaQuery("(min-width:950px)");
  console.log(matches);

  return (
    <Container
      fixed
      sx={{
        backgroundImage:
          pikachuCounter >= 3
            ? "url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg)"
            : null,
      }}
    >
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        height={matches ? "100vh" : "150vh"}
        width={matches ? "100vh" : "50vh"}
        flexDirection={!matches ? "column-reverse" : "row"}
        component={"div"}
      >
        <Box margin={1}>
          <List setSelectedPokemon={setSelectedPokemon} />
        </Box>
        <Box margin={1}>
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
