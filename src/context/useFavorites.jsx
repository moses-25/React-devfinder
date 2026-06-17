import { useContext } from "react";
import { FavoritesContext } from "./favoritesContext";

export const useFavorites = () => useContext(FavoritesContext);
