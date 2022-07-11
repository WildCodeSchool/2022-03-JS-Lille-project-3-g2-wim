import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  TextField,
} from "react-admin";

export default function LessonList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField label="Nom du fichier" source="fileName" />
        <TextField label="Identifiant de la Matière" source="schoolTopic_id" />
        <TextField label="Titre" source="title" />
        <TextField label="Genre" source="musicStyle" />
        <TextField label="Emplacement" source="fileLocation" />
        <NumberField label="Durée" source="duration" />
        <TextField label="Identifiant de la classe" source="schoolClass_id" />
        <EditButton label="Editer" />
        <DeleteButton label="Supprimer" />
      </Datagrid>
    </List>
  );
}
