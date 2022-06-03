
import { Routes, Route } from "react-router-dom";
import Header from "@components/Header";
import Home from "@pages/Home";
import LogIn from "@pages/LogIn";
import SignIn from "@pages/SignIn";
import Subjects from "@pages/Subjects";
import Stream from "@pages/Stream";
import Styled from "./AppStyle";

function App() {
  return (
    <div className="App">
      <Styled>
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<Home />} />;
            <Route path="/" element={<Home />} />;
            <Route path="/login" element={<LogIn />} />;
            <Route path="/signin" element={<SignIn />} />;
            <Route path="/subjects" element={<Subjects />} />;
            <Route path="/stream" element={<Stream />} />;
          </Routes>
        </main>
      </Styled>
    </div>
  );
}

export default App;
