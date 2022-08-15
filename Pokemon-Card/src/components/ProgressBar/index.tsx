import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import {IPropsProgressBar} from "../../types/@types";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "1rem",
  borderRadius: 5,
  width: "15rem",
  alignSelf: "flex-end",

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function ProgressBar({ value, atribute }: IPropsProgressBar) {
  function returnMaxValue(atribute: string) {
    switch (atribute) {
      case "hp":
        return 255;
      case "attack":
        return 181;
      case "defense":
        return 230;
      case "special-attack":
        return 173;
      case "special-defense":
        return 230;
      case "speed":
        return 200;
      default:
        return 100;
    }
  }

  let MIN = 0;
  let MAX = returnMaxValue(atribute);
  const normalise = (value: number) => ((value - MIN) * 100) / (MAX - MIN);
  return (
    <Box>
      <BorderLinearProgress variant="determinate" value={normalise(value)} />
    </Box>
  );
}
