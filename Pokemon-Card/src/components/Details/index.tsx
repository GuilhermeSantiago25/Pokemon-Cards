import React, { useState, memo } from "react";
import { Card, CardContent, CardMedia, Typography, Stack } from "@mui/material";

import { Item } from "../index";
import { Pokemon, IProps } from "../../types/@types";
import { useFetch } from "../../hooks/useFetch";

const Details: React.FC<IProps> = ({ selectedPokemon }) => {
  const { data, error, loading } = useFetch<Pokemon>(
    `pokemon/${selectedPokemon?.name}`,
    "get"
  );

  return (
    <Card sx={{ width: 300 }}  hidden={data? false : true}  component='div' >
      <CardMedia
        component="img"
        alt="Imagem Frontal"
        image={
          data?.sprites &&
          data?.sprites.other?.["official-artwork"].front_default
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
          data?.types.map((type: any) => (
            <Item key={type.type.name}>{type.type.name}</Item>
          ))}
      </Stack>
      <CardContent>
        {data?.stats &&
          data?.stats.map((stats: any) => (
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              key={stats.stat.name}
            >
              {stats.stat.name}-{stats.base_stat}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
};

export default memo(Details);
