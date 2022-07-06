import Header from "@components/Header";
import Navbar from "@components/Navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";
import FavCard from "@components/FavCard";
import { useParams } from "react-router-dom";
import SFavorites from "./style";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}${`/favorite/${id}`}`)
      .then(({ data }) => {
        setFavorites(data);
      });
  }, []);
  return (
    <SFavorites>
      <Header />
      {favorites.map((favorite) => (
        <FavCard
          key={favorite.id}
          id={favorite.id}
          title={favorite.title}
          duration={favorite.duration}
          musicStyle={favorite.musicStyle}
        />
      ))}
      <Navbar />
    </SFavorites>
  );
}
export default Favorites;
