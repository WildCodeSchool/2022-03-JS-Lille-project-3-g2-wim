import { Admin, Resource } from "react-admin";
import UserList from "@components/Users/userList";
import UserEdit from "@components/Users/userEdit";
import LessonEdit from "@components/Lessons/lessonEdit";
import LessonList from "@components/Lessons/lessonList";
import LessonCreate from "@components/Lessons/lessonCreate";
import TopicList from "@components/Topic/topicList";
import TopicEdit from "@components/Topic/topicEdit";
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";
import Dashboard from "./Dashboard";
import dataProvider from "./dataProvider";

function App() {
  return (
    <div className="App">
      <Admin dashboard={Dashboard} dataProvider={dataProvider}>
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          icon={UserIcon}
        />
        <Resource
          name="lessons"
          list={LessonList}
          edit={LessonEdit}
          create={LessonCreate}
          icon={PostIcon}
        />
        <Resource name="topics" list={TopicList} edit={TopicEdit} />
      </Admin>
    </div>
  );
}

export default App;
