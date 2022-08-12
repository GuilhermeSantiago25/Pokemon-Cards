import React, { memo } from "react";
import { Box } from "@mui/material";

import { Result, Pokemon, IProps } from "../../types/@types";
import { useFetch } from "../../hooks/useFetch";

const Details: React.FC<IProps> = ({ selectedPokemon }) => {
  const { data, error, loading } = useFetch<Pokemon>(
    `pokemon/${selectedPokemon?.name}`,
    "get"
  );

  return (
    <Box>
      <img alt="Imagem Frontal" src={data?.sprites && data?.sprites.other?.["official-artwork"].front_default}/>

      <p>
        {data?.name && data?.name}#{data?.id && data?.id}
      </p>

      <p>
        {data?.types && data?.types.map((type: any) => <p>{type.type.name}</p>)}
      </p>

      <p>
        {data?.stats &&
          data?.stats.map((stats: any) => (
            <p>
              {stats.stat.name}-{stats.base_stat}
            </p>
          ))}
      </p>
    </Box>
  );
};

export default memo(Details);
