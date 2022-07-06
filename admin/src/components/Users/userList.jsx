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
        <TextField source="id" />
        <EmailField source="email" />
        <TextField source="name" />
        <TextField source="firstname" />
        <NumberField source="age" />
        <TextField source="phoneNumber" />
        <TextField source="schoolOption" />
        <TextField source="schoolName" />
        <TextField source="country" />
        <TextField source="city" />
        <ReferenceField source="schoolClass_id" reference="users">
          <TextField source="schoolClass_id" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
}
