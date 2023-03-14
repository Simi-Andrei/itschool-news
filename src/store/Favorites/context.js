import { createContext, useReducer } from "react";
import { favoritesReducer, initialState } from "./reducer";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const favoritesContextValue = {
    favoritesState: state,
    favoritesDispatch: dispatch,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
