import { Container, Grid } from "@mui/material";
import React from "react";
import "./index.css";

import ViewFavreipes from "../viewFavrecipes";

export default function FavRecipes() {
  const favrecipes = JSON.parse(localStorage.getItem("fav"));
  console.log("favrecipes========>", favrecipes);

  return (
    <div className="fav_bcg">
      <Container sx={{ py: 8 }} maxWidth="lg">
        <Grid container spacing={4}>
          {favrecipes?.map((recipe) => (
            <Grid item xs={12} sm={6} md={3}>
              <ViewFavreipes recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
