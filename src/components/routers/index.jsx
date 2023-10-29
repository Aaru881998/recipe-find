import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipesData from "../recipesData";
import ViewDetails from "../ViewDetails";
import FavRecipes from "../favrecipes";

export default function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RecipesData />} />
          <Route path="/viewdata" element={<ViewDetails />} />
          <Route path="/favrecipes" element={<FavRecipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
