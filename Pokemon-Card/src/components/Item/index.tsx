import React from "react";
import { Paper, styled, PaperProps } from "@mui/material";

interface ItemType extends PaperProps {
  type:
    | "bug"
    | "dark"
    | "dragon"
    | "electric"
    | "fairy"
    | "fighting"
    | "fire"
    | "flying"
    | "ghost"
    | "grass"
    | "ground"
    | "ice"
    | "normal"
    | "poison"
    | "psychic"
    | "rock"
    | "steel"
    | "water";
}

export const Item = styled(Paper)<ItemType>(({ theme, type }) => ({
  backgroundColor: theme.colors.type[type],
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  textTransform: "capitalize",
  width: 150,
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '0.7 rem',
  textShadow: '1px 1px 1px #000',
}));
