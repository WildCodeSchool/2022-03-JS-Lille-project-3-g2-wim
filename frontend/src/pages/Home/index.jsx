import Header from "@components/Header";
import Navbar from "@components/Navbar";
import SHome from "./style";

function Home() {
  return (
    <SHome>
      <Header />
      <p>Home</p>
      <Navbar />
    </SHome>
  );
}

export default Home;
