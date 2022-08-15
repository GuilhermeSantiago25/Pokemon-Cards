import React from "react";
import { Paper, styled } from "@mui/material";
import { ItemType } from "../../types/@types";

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
