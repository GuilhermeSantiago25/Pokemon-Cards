import React, { memo } from "react";
import {
  List as MaterialList,
  ListItem,
  ListItemText,
  Box,
  ListItemButton,
  Button,
  Card,
} from "@mui/material";
import { Result, Pokemon, IProps } from "../../types/@types";
import { useFetch } from "../../hooks/useFetch";

const List: React.FC<IProps> = ({ setSelectedPokemon }) => {
  const { data, error, loading } = useFetch<Result>("pokemon/", "get");

  return (
    <Card sx={{ width: 300, height: 537 }}>
      <MaterialList sx={{maxHeight: '93%', overflow: "hidden"}}>
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
                  <ListItemText
                    primary={pokemon.name}
                    sx={{ textTransform: "capitalize" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
      </MaterialList>
      <Box display="flex" justifyContent={'center'} >
        <Button>Anterior</Button>
        <Button>Próxima</Button>
      </Box>
    </Card>
  );
};

export default memo(List);
