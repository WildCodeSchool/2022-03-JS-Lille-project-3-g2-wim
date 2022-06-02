import SAudioPlayerLoading from "./style";

export default function AudioPlayer() {
  return (
    <SAudioPlayerLoading>
      <progress min="0" max="10" walue="10">
        {" "}
        10
      </progress>
      <progress min="0" max="100" walue="100">
        {" "}
        100
      </progress>
      <section className="positionnement">
        <div>0</div>
        <input type="range" min="0" max="100" step="10" />
        <div>100</div>
      </section>
    </SAudioPlayerLoading>
  );
}
