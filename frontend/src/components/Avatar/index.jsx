import { useSelector } from "react-redux";
import SAvatar from "./style";

export default function Avatar() {
  const { firstname, avatar } = useSelector((store) => store.user);
  return (
    <SAvatar>
      <img
        src={
          avatar ||
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/640px-Anonymous_emblem.svg.png"
        }
        alt="User avatar"
      />
      <p>{firstname || "Stranger"}</p>
    </SAvatar>
  );
}
