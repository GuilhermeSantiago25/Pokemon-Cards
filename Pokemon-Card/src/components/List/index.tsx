import React, { useState,memo } from "react";
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
  const [offset, setOffset] = useState(0);
  const { data, error, loading } = useFetch<Result>(`pokemon?limit=10&offset=${offset}/`, "get");

  const nextPage = () => {
    setOffset(offset + 10);
  }
  const prevPage = () => {
    if(offset > 10) {
    setOffset(offset - 10);
    } else {
      setOffset(0);
    }
  }

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
        <Button onClick={prevPage}>Anterior</Button>
        <Button onClick={nextPage}>Próxima</Button>
      </Box>
    </Card>
  );
};

export default memo(List);
