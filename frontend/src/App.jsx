import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import LogIn from "@pages/LogIn";
import SignIn from "@pages/SignIn";
import Subjects from "@pages/Subjects";
import Stream from "@pages/Stream";
import Lessons from "@pages/Lessons";
import Styled from "./AppStyle";

function App() {
  return (
    <div className="App">
      <Styled>
        <main>
          <Routes>
            <Route path="*" element={<Home />} />;
            <Route path="/" element={<Home />} />;
            <Route path="/login" element={<LogIn />} />;
            <Route path="/lessons" element={<Lessons />} />;
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
