import { useState } from "react";
import { FavoritesContext } from "./favoritesContext";

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (user) => {
        setFavorites([...favorites, user]);
    };

    return (
        <FavoritesContext.Provider value={{
            favorites,
            addFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
}
