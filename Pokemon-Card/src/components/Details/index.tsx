import React, { memo } from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Box,
  Card,
} from "@mui/material";
import { Item, ProgressBar } from "../index";
import { Pokemon, IPropsDetail, Type, Stat } from "../../types/@types";
import { useFetch } from "../../hooks/useFetch";

const Details: React.FC<IPropsDetail> = ({
  selectedPokemon,
  setPikachuCounter,
  pikachuCounter,
}) => {
  const { data } = useFetch<Pokemon>(
    `pokemon/${selectedPokemon?.name}`,
    "get"
  );

  return (
    <Card sx={{ width: '25rem' }} hidden={data ? false : true}>
      <CardMedia
        component="img"
        alt="Imagem Frontal"
        sx={{ padding: "1rem" }}
        image={
          (data?.sprites &&
            data?.sprites.other?.["official-artwork"].front_default) ||
          (data?.sprites && data?.sprites.front_default)
        }
        onClick={() => {
          if (selectedPokemon?.name === "pikachu") {
            setPikachuCounter(pikachuCounter + 1);
          }
        }}
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
          data?.types.map((types: Type) => (
            <Item key={types.type.name} type={types.type.name}>
              {types.type.name}
            </Item>
          ))}
      </Stack>
      <CardContent>
        {data?.stats &&
          data?.stats.map((stats: Stat) => (
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
