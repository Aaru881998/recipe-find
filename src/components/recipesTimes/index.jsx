import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { Appcontext } from "../context";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function RecipesTime({ recipe }) {
  const { setView } = React.useContext(Appcontext);
  const history = useNavigate();

  const saveToFavourite = (recipe) => {
    const prevList = localStorage.getItem("fav")
      ? JSON.parse(localStorage.getItem("fav"))
      : [];
    console.log("prevList", prevList);
    prevList.push(recipe);
    localStorage.setItem("fav", JSON.stringify(prevList));
    swal("Saved Recipes!", "You clicked the button!", "success");
  };
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
        <Button
          size="small"
          style={{
            background: "darkgoldenrod",
            color: "white",
            fontWeight: "600",
          }}
          className="add_btn"
          onClick={(e) => {
            saveToFavourite(recipe);
          }}
        >
          SAVE
        </Button>
      </CardActions>
    </Card>
  );
}

{
  /* <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="div"
          sx={{
            // 16:9
            pt: '56.25%',
          }}
          image="https://source.unsplash.com/random?wallpapers"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            Heading
          </Typography>
          <Typography>
            This is a media card. You can use this section to describe the
            content.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card> */
}
