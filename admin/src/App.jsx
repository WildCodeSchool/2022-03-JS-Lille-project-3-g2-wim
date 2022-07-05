import { Admin, Resource } from "react-admin";
import UserList from "@components/users";
import TopicList from "@components/topics";
import LessonList from "@components/lessons";

import dataProvider from "./dataProvider";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="lessons" list={LessonList} />
        <Resource name="topics" list={TopicList} />
      </Admin>
    </div>
  );
}

export default App;
