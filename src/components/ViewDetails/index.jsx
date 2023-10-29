import React from "react";
import { Appcontext } from "../context";
import "./index.css";
import { Container, Grid } from "@mui/material";

export default function ViewDetails() {
  const { view } = React.useContext(Appcontext);

  return (
    <div className="view_clr">
      <Container sx={{ py: 4 }} maxWidth="lg">
        <h3 className="food_details">Food Recipes Details</h3>

        <Grid xs={6}>
          <Grid
            style={{ display: "flex", flexWrap: "wrap" }}
            className="view_data"
          >
            <div>
              <img className="image_d" src={view?.recipe?.image} />

              <p className="label_d">
                <span className="title">Title</span>: {view?.recipe?.label}
              </p>
            </div>
            <div>
              <h2 className="typo">
                <span className="title">Ingredients Details</span>:
              </h2>

              {view?.recipe?.ingredients?.map((ingredient) => (
                <p>{ingredient?.text}</p>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
