import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsCategory from "./pages/NewsCategory";
import NewsDetails from "./pages/NewsDetails";
import Favorites from "./pages/Favorites";
import Page404 from "./pages/Page404";
import { FavoritesProvider } from "./store/Favorites/context";

function App() {
  return (
    <div className="App">
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/category/:categoryId" element={<NewsCategory />} />
          <Route path="/news/:newsId/*" element={<NewsDetails />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </FavoritesProvider>
    </div>
  );
}

export default App;
