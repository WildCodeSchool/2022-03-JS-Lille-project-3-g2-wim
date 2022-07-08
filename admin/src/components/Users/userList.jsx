import {
  Datagrid,
  EmailField,
  List,
  NumberField,
  TextField,
} from "react-admin";

export default function UserList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <EmailField source="email" />
        <TextField source="name" />
        <TextField source="firstname" />
        <NumberField source="age" />
        <TextField source="phoneNumber" />
        <TextField source="schoolOption" />
        <TextField source="schoolName" />
        <TextField source="schoolClass_id" />
      </Datagrid>
    </List>
  );
}
