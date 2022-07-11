import {
  DeleteButton,
  EditButton,
  Datagrid,
  List,
  TextField,
} from "react-admin";

export default function SchoolclassList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField label="Identifiant" source="id" />
        <TextField label="Classe" source="label" />
        <EditButton label="Editer" />
        <DeleteButton label="Supprimer" />
      </Datagrid>
    </List>
  );
}
