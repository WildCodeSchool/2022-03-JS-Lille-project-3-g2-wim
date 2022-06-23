import IconSelectedHeart from "@assets/Images/icon-selected-heart.svg";
import SButtonStreamFav from "./style";

export default function ButtonStreamFav() {
  return (
    <SButtonStreamFav img={IconSelectedHeart}>
      <button alt="favorites" type="button" />
    </SButtonStreamFav>
  );
}
