import {
  Datagrid,
  EmailField,
  List,
  NumberField,
  ReferenceField,
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
        <TextField source="schoolOption" />
        <ReferenceField source="id" reference="users">
          <TextField source="schoolClass_id" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
}
