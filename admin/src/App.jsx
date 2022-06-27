import { Admin, Resource, ListGuesser } from "react-admin";

import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={ListGuesser} />
        <Resource name="lessons" list={ListGuesser} />
      </Admin>
    </div>
  );
}

export default App;
