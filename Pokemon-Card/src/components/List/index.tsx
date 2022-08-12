import React, { memo } from "react";
import {
  List as MaterialList,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
  Button,
} from "@mui/material";
import { Result, Pokemon, IProps } from "../../types/@types";
import { useFetch } from "../../hooks/useFetch";

const List: React.FC<IProps> = ({ setSelectedPokemon }) => {
  const { data, error, loading } = useFetch<Result>("pokemon/", "get");

  return (
    <Box>
      <MaterialList>
        {loading
          ? "Loading..."
          : error
          ? "Error"
          : data &&
            data.results.map((pokemon: Pokemon) => (
              <ListItem key={pokemon.name} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setSelectedPokemon && setSelectedPokemon(pokemon);
                  }}
                >
                  <ListItemText primary={pokemon.name} />
                </ListItemButton>
              </ListItem>
            ))}
      </MaterialList>
      <Box>
        <Button>Anterior</Button>
        <Button>Próxima</Button>
      </Box>
    </Box>
  );
};

export default memo(List);
