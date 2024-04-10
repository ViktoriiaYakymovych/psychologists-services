import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../../pages/Home/Home"));
const Psychologists = lazy(() =>
  import("../../pages/Psychologists/Psychologists")
);
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/psychologists" element={<Psychologists />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
