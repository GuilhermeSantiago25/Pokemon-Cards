import React from "react";
import { Paper, styled } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  textTransform: "capitalize",
  width: 150,
  color: theme.palette.text.secondary,
}));
