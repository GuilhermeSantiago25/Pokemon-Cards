import React, { useState, memo } from "react";
import {
  List as MaterialList,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
  Button,
  Card,
  Typography,
} from "@mui/material";
import { Result, Pokemon, IProps } from "../../types/@types";
import { useFetch } from "../../hooks/useFetch";
import { LoaderAnimation } from "../index";

const List: React.FC<IProps> = ({ setSelectedPokemon }) => {
  const [offset, setOffset] = useState(0);
  const { data, error, loading } = useFetch<Result>(
    `pokemon?limit=12&offset=${offset}/`,
    "get"
  );

  const nextPage = () => {
    setOffset(offset + 12);
  };
  const prevPage = () => {
    if (offset > 12) {
      setOffset(offset - 12);
    } else {
      setOffset(0);
    }
  };

  return (
    <Card sx={{ width: 300, height: 635 }}>
      <Typography 
          variant="h6"
          color="primary"
          component="p"
          sx={{ alignSelf: "center", textAlign: "center" }}
      >Pokemons</Typography>
      <MaterialList sx={{ maxHeight: "90%", overflow: "hidden" }}>
        {loading ? (
          <Box sx={{ width: 300, height: 576 }}>
            <LoaderAnimation />
          </Box>
        ) : error ? (
          "Error"
        ) : (
          data &&
          data.results.map((pokemon: Pokemon) => (
            <ListItem key={pokemon.name} disablePadding>
              <ListItemButton
                onClick={() => {
                  setSelectedPokemon && setSelectedPokemon(pokemon);
                }}
              >
                <ListItemText
                  primary={pokemon.name}
                  sx={{ textTransform: "capitalize" }}
                />
              </ListItemButton>
            </ListItem>
          ))
        )}
      </MaterialList>
      <Box display="flex" justifyContent={"center"}>
        <Button onClick={prevPage}>Anterior</Button>
        <Button onClick={nextPage}>Próxima</Button>
      </Box>
    </Card>
  );
};

export default memo(List);
