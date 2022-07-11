import {
  Datagrid,
  DeleteButton,
  EditButton,
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
        <TextField label="Nom" source="name" />
        <TextField label="Prénom" source="firstname" />
        <NumberField source="age" />
        <TextField label="Option" source="schoolOption" />
        <TextField source="schoolName" />
        <TextField source="schoolClass_id" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
}
