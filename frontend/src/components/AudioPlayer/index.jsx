import AudioPlayerControll from "@components/AudioPlayerControll";
import AudioPlayerLoading from "@components/AudioPlayerLoading";
import SAudioPlayer from "./style";

export default function AudioPlayer() {
  return (
    <SAudioPlayer>
      <AudioPlayerLoading />
      <AudioPlayerControll />
    </SAudioPlayer>
  );
}
