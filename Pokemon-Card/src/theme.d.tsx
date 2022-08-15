import { ThemeOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface Theme {
    colors: {
      type: {
        bug: string;
        dark: string;
        dragon: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
      backgroundType: {
        bug: string;
        dark: string;
        dragon: string;
        electric: string;
        fairy: string;
        fighting: string;
        fire: string;
        flying: string;
        ghost: string;
        grass: string;
        ground: string;
        ice: string;
        normal: string;
        poison: string;
        psychic: string;
        rock: string;
        steel: string;
        water: string;
      };
    };
  }

  interface ThemeOptions {
    colors?: {
      type: {
        bug: React.CSSProperties["color"];
        dark: React.CSSProperties["color"];
        dragon: React.CSSProperties["color"];
        electric: React.CSSProperties["color"];
        fairy: React.CSSProperties["color"];
        fighting: React.CSSProperties["color"];
        fire: React.CSSProperties["color"];
        flying: React.CSSProperties["color"];
        ghost: React.CSSProperties["color"];
        grass: React.CSSProperties["color"];
        ground: React.CSSProperties["color"];
        ice: React.CSSProperties["color"];
        normal: React.CSSProperties["color"];
        poison: React.CSSProperties["color"];
        psychic: React.CSSProperties["color"];
        rock: React.CSSProperties["color"];
        steel: React.CSSProperties["color"];
        water: React.CSSProperties["color"];
      };
      backgroundType: {
        bug: React.CSSProperties["color"];
        dark: React.CSSProperties["color"];
        dragon: React.CSSProperties["color"];
        electric: React.CSSProperties["color"];
        fairy: React.CSSProperties["color"];
        fighting: React.CSSProperties["color"];
        fire: React.CSSProperties["color"];
        flying: React.CSSProperties["color"];
        ghost: React.CSSProperties["color"];
        grass: React.CSSProperties["color"];
        ground: React.CSSProperties["color"];
        ice: React.CSSProperties["color"];
        normal: React.CSSProperties["color"];
        poison: React.CSSProperties["color"];
        psychic: React.CSSProperties["color"];
        rock: React.CSSProperties["color"];
        steel: React.CSSProperties["color"];
        water: React.CSSProperties["color"];
      };
    };
  }
}
