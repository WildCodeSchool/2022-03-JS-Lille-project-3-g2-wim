import Header from "@components/Header";
import Navbar from "@components/Navbar";
import SFavorites from "./style";

function Favorites() {
  return (
    <SFavorites>
      <Header />
      <div>Favoris</div>

      <Navbar />
    </SFavorites>
  );
}

export default Favorites;
