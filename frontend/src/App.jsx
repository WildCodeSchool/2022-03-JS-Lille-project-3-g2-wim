import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import LogIn from "@pages/LogIn";
import SignIn from "@pages/SignIn";
import Subjects from "@pages/Subjects";
import Stream from "@pages/Stream";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import Styled from "./AppStyle";

const theme = createTheme({
  palette: {
    primary: {
      main: "#29abe2",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  return (
    <div className="App">
      <Styled>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
      </Styled>
    </div>
  );
}

export default App;
