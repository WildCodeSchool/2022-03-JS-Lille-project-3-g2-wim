import {
  Datagrid,
  EmailField,
  List,
  NumberField,
  ReferenceManyField,
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
        <ReferenceManyField source="schoolClass_id" reference="User">
          <TextField source="label" />
        </ReferenceManyField>
      </Datagrid>
    </List>
  );
}
