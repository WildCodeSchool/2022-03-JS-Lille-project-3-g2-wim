import { Admin, Resource } from "react-admin";
import UserList from "@components/Users/UserList";
import UserEdit from "@components/Users/UserEdit";
import LessonList from "@components/Lessons/LessonList";
import LessonCreate from "@components/Lessons/LessonCreate";
import LessonEdit from "@components/Lessons/LessonEdit";
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
      </Admin>
    </div>
  );
}

export default App;
