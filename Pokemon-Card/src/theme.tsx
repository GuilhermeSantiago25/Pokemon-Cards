import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  colors: {
    type: {
      bug: "#A6B91A",
      dark: "#705746",
      dragon: "#6F35FC",
      electric: "#F7D02C",
      fairy: "#D685AD",
      fighting: "#C22E28",
      fire: "#EE8130",
      flying: "#A98FF3",
      ghost: "#735797",
      grass: "#7AC74C",
      ground: "#E2BF65",
      ice: "#96D9D6",
      normal: "#A8A77A",
      poison: "#A33EA1",
      psychic: "#F95587",
      rock: "#B6A136",
      steel: "#B7B7CE",
      water: "#6390F0",
    },
    backgroundType: {
      bug: "#8BD674",
      dark: "#6F6E78",
      dragon: "#7383B9",
      electric: "#F2CB55",
      fairy: "#EBA8C3",
      fighting: "#EB4971",
      fire: "#FFA756",
      flying: "#83A2E3",
      ghost: "#8571BE",
      grass: "#8BBE8A",
      ground: "#F78551",
      ice: "#91D8DF",
      normal: "#B5B9C4",
      poison: "#9F6E97",
      psychic: "#FF6568",
      rock: "#D4C294",
      steel: "#4C91B2",
      water: "#58ABF6",
    },
  },
});

export default theme;
