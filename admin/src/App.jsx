import { Admin, Resource } from "react-admin";
import UserList from "@components/Users/userList";
import UserEdit from "@components/Users/userEdit";
import LessonEdit from "@components/Lessons/lessonEdit";
import LessonList from "@components/Lessons/lessonList";
import LessonCreate from "@components/Lessons/lessonCreate";
import TopicList from "@components/Topic/topicList";
import SchoolclassList from "@components/Classes/classesList";
import UserIcon from "@mui/icons-material/Group";
import PostIcon from "@mui/icons-material/Book";
import Dashboard from "./Dashboard";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

function App() {
  return (
    <div className="App">
      <Admin
        authProvider={authProvider}
        dashboard={Dashboard}
        dataProvider={dataProvider}
      >
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
        <Resource name="topics" list={TopicList} />
        <Resource name="schoolclass" list={SchoolclassList} />
      </Admin>
    </div>
  );
}

export default App;
