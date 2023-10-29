import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import RecipesTime from "../recipesTimes";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Appcontext } from "../context";
import { Container, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
export default function RecipesData() {
  const { query, setQuery, search, setSearch, recipes, setRecipes } =
    React.useContext(Appcontext);
  const APP_ID = "d29d40f6";
  const APP_KEY = "5b19a6bd355a2ff2a764d0059f30cf7b";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    console.log("JJJ");
    try {
      const res = await axios.get(url);
      console.log("res======>", res.data);
      setRecipes(res.data.hits);
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
  useEffect(() => {
    getRecipes();
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="background_clr">
      <Container sx={{ py: 4 }} maxWidth="lg" className="">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Paper
              component="form"
              onSubmit={onSubmit}
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
              }}
              className="search_input"
            >
              <InputBase
                placeholder=" Enter ingridient"
                type="text"
                value={search}
                sx={{ ml: 1, flex: 1 }}
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>

          <Grid item xs={6}>
            <div className="d-flex justify-content-end text-end">
              <Avatar>
                <Link to={"/favrecipes"}>
                  <FavoriteIcon className="text-danger" />
                </Link>
              </Avatar>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container sx={{ py: 4 }} maxWidth="lg">
        <Grid container spacing={4}>
          {recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={3}>
              <RecipesTime recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
