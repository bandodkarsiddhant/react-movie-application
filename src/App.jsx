import "./App.css";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Movies from "./Components/Movies/Movies";
import MovieInformation from "./Components/MovieInformation/MovieInformation";
import Actors from "./Components/Actors/Actors";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <main>
        <Routes>
          <Route path="/"  element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
