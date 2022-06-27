import Header from "@components/Header";
import NavBar from "@components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import SFavorites from "./style";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/favorite/2`)
      .then(({ data }) => {
        setFavorites(data);
      });
  }, []);
  return (
    <SFavorites>
      <Header />
      <div>
        {favorites.map((favorite) => (
          <div>
            <p>{favorite.id}</p>
            <p>{favorite.title}</p>
            <p>{favorite.duration}</p>
            <p>{favorite.musicStyle}</p>
          </div>
        ))}
      </div>
      <NavBar />
    </SFavorites>
  );
}
