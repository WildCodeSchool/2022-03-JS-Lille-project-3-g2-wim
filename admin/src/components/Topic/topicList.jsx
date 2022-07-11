import {
  Datagrid,
  List,
  TextField,
  DeleteButton,
  EditButton,
} from "react-admin";

export default function TopicList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField label="Identifiant" source="id" />
        <TextField label="Matière" source="label" />
        <TextField label="Logo (Page d'écoute)" source="logo" />
        <TextField label="Icon de la matière" source="icon" />
        <EditButton label="Editer" />
        <DeleteButton label="Supprimer" />
      </Datagrid>
    </List>
  );
}
