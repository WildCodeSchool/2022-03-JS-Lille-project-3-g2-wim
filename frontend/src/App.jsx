import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import LogIn from "@pages/LogIn";
import Subjects from "@pages/Subjects";
import Stream from "@pages/Stream";
import Lessons from "@pages/Lessons";
import Favorites from "@pages/Favorite";
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
              <Route path="/connexion" element={<LogIn />} />;
              <Route path="/accueil" element={<Subjects />} />;
              <Route path="/cours/:id" element={<Lessons />} />;
              <Route path="/ecoute/:id" element={<Stream />} />;
              <Route path="/favoris" element={<Favorites />} />
            </Routes>
          </main>
        </ThemeProvider>
      </Styled>
    </div>
  );
}
export default App;
