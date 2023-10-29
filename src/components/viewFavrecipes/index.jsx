import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { Appcontext } from "../context";
import { useNavigate } from "react-router-dom";

export default function ViewFavreipes({ recipe }) {
  const { setView } = React.useContext(Appcontext);
  const history = useNavigate();

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="div"
        sx={{
          pt: "56.25%",
        }}
        image={recipe.recipe.image}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className="text-start"
          style={{ fontSize: "15px", fontWeight: "600" }}
        >
          {recipe.recipe.label}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          style={{
            background: "darkgoldenrod",
            color: "white",
            fontWeight: "600",
          }}
          className="add_btn"
          onClick={() => {
            setView(recipe);
            history("/viewdata");
          }}
        >
          VIEW
        </Button>
      </CardActions>
    </Card>
  );
}
