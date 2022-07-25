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
        <TextField label="Nom de l'école" source="schoolName" />
        <TextField label="Identifiant de la classe" source="schoolClass_id" />
        <EditButton label="Editer" />
        <DeleteButton label="Supprimer" />
      </Datagrid>
    </List>
  );
}
