import {
  Datagrid,
  DeleteButton,
  EditButton,
  List,
  NumberField,
  TextField,
} from "react-admin";
import SLessonList from "./style";

export default function LessonList() {
  return (
    <SLessonList>
      <article>
        <section>
          <h3>Identifiant de la Matière :</h3>
          <ul>
            <span>
              <li>1 Français</li>
              <li>2 Géographie</li>
              <li>3 Histoire</li>
              <li>4 Physique</li>
            </span>
            <span>
              <li>5 Mathématiques</li>
              <li>6 SVT</li>
              <li>7 Espagnol</li>
              <li>8 Philosophie</li>
            </span>
            <span>
              <li>9 Anglais</li>
              <li>10 EMC</li>
              <li>11 SES</li>
              <li>12 Chimie</li>
            </span>
          </ul>
        </section>
        <section>
          <h3>Identifiant de la classe :</h3>
          <ul>
            <span>
              <li>1 Terminale</li>
              <li>2 Première</li>
              <li>3 Seconde</li>
              <li>4 Troisième</li>
            </span>
            <span>
              <li>5 Quatrième</li>
              <li>6 Cinquième</li>
              <li>7 Sixième</li>
              <li>8 Etudes</li>
            </span>
          </ul>
        </section>
      </article>
      <List>
        <Datagrid>
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
      </List>
    </SLessonList>
  );
}
