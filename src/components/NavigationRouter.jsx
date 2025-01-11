import React, { useState } from "react";
import BeachesIslands from "./places/BeachesIslands";
import HeritageHistory from "./places/HeritageHistory";
import CultureTradition from "./places/CultureTradition";
import NatureAdventure from "./places/NatureAdventure";
import MustTryDishes from "./foods/MustTryDishes";
import StreetFood from "./foods/StreetFood";
import Desserts from "./foods/Desserts";
import FoodieEvents from "./foods/FoodieEvents";

function NavigationRouter({ currentPage, setPage }) {
  switch (currentPage) {
    case "beaches-islands":
      return <BeachesIslands setPage={setPage} />;
    case "heritage-history":
      return <HeritageHistory setPage={setPage} />;
    case "culture-tradition":
      return <CultureTradition setPage={setPage} />;
    case "nature-adventure":
      return <NatureAdventure setPage={setPage} />;
    case "must-try-dishes":
      return <MustTryDishes setPage={setPage} />;
    case "street-food":
      return <StreetFood setPage={setPage} />;
    case "desserts":
      return <Desserts setPage={setPage} />;
    case "foodie-events":
      return <FoodieEvents setPage={setPage} />;
    default:
      return null;
  }
}

export default NavigationRouter; 