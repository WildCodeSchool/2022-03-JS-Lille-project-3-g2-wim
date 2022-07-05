import { Admin, EditGuesser, Resource } from "react-admin";
import UserList from "@components/Users/userslist";
import UserEdit from "@components/Users/usersedit";
import TopicList from "@components/topics";
import LessonList from "@components/lessons";

import dataProvider from "./dataProvider";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} />
        <Resource name="lessons" list={LessonList} edit={EditGuesser} />
        <Resource name="topics" list={TopicList} edit={EditGuesser} />
      </Admin>
    </div>
  );
}

export default App;
