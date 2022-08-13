import React, { useState, memo } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
} from "@mui/material";

import { Item, ProgressBar } from "../index";
import { Pokemon, IProps } from "../../types/@types";
import { useFetch } from "../../hooks/useFetch";

const Details: React.FC<IProps> = ({ selectedPokemon }) => {
  const { data, error, loading } = useFetch<Pokemon>(
    `pokemon/${selectedPokemon?.name}`,
    "get"
  );

  return (
    <Card sx={{ width: 400 }} hidden={data ? false : true} component="div">
      <CardMedia
        component="img"
        alt="Imagem Frontal"
        sx={{padding: "1rem"}}
        
        image={
          data?.sprites &&
          data?.sprites.other?.["official-artwork"].front_default
            ? data?.sprites.other?.["official-artwork"].front_default
            : data?.sprites && data?.sprites.front_default
        }
      />
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        sx={{ textAlign: "center" }}
        textTransform="capitalize"
      >
        {data?.name && data?.name}#{data?.id && data?.id}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        marginX={1}
        sx={{ justifyContent: "center" }}
      >
        {data?.types &&
          data?.types.map((types: any) => (
            <Item key={types.type.name}>{types.type.name}</Item>
          ))}
      </Stack>
      <CardContent>
        {data?.stats &&
          data?.stats.map((stats: any) => (
            <Box
              key={stats.stat.name}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                textTransform="capitalize"
                component="p"
                sx={{ display: "flex" }}
              >
                {stats.stat.name}
              </Typography>
              <ProgressBar value={stats.base_stat} atribute={stats.stat.name} />
            </Box>
          ))}
      </CardContent>
    </Card>
  );
};

export default memo(Details);
