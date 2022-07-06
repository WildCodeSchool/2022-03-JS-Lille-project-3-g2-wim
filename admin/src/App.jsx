import { Admin, Resource } from "react-admin";
import UserList from "@components/Users/userList";
import UserEdit from "@components/Users/userEdit";
import LessonEdit from "@components/Lessons/lessonEdit";
import LessonList from "@components/Lessons/lessonList";
import TopicList from "@components/Topic/topicList";
import TopicEdit from "@components/Topic/topicEdit";

import dataProvider from "./dataProvider";

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} />
        <Resource name="lessons" list={LessonList} edit={LessonEdit} />
        <Resource name="topics" list={TopicList} edit={TopicEdit} />
      </Admin>
    </div>
  );
}

export default App;
