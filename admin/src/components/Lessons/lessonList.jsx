import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  TextField,
} from "react-admin";
import SLessonList from "./styleLesson";

export default function LessonList() {
  return (
    <SLessonList>
      <List>
        <Datagrid rowClick="edit">
          <TextField label="Nom du fichier" source="fileName" />
          <TextField
            label="Identifiant de la Matière"
            source="schoolTopic_id"
          />
          <TextField label="Titre" source="title" />
          <TextField label="Genre" source="musicStyle" />
          <TextField label="Emplacement" source="fileLocation" />
          <NumberField label="Durée" source="duration" />
          <TextField label="Identifiant de la classe" source="schoolClass_id" />
          <EditButton label="Editer" />
          <DeleteButton label="Supprimer" />
        </Datagrid>
        <div>
          <p>
            <h3>Identifiant de la Matière :</h3>
            <br /> 1 Français
            <br />
            2 Géographie
            <br />
            3 Histoire
            <br />
            4 Physique
            <br />
            5 Mathématiques
            <br />
            6 SVT
            <br />
            7 Espagnol
            <br />
            8 Philosophie
            <br />
            9 Anglais
            <br />
            10 EMC
            <br />
            11 SES
            <br />
            <h3>Identifiant de la classe :</h3>
            <br />1 Terminale
            <br /> 2 Première
            <br /> 3 Seconde <br />4 Troisième
            <br /> 5 Quatrième
            <br /> 6 Cinquième
            <br /> 7 Sixième
            <br /> 8 Etudes
          </p>
        </div>
      </List>
    </SLessonList>
  );
}
