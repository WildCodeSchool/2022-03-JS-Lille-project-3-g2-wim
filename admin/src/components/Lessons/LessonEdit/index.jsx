import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import SLessonEdit from "./style";

export default function LessonEdit() {
  return (
    <SLessonEdit>
      <Edit>
        <SimpleForm sx={{ width: "40vw" }}>
          <TextInput label="Nom du fichier" source="fileName" />
          <NumberInput
            min="1"
            max="12"
            label="Identifiant de l de la Matière"
            source="schoolTopic_id"
          />
          <TextInput label="Titre de la leçon" source="title" />
          <TextInput label="Genre" source="musicStyle" />
          <TextInput label="Fichier leçon mp3" source="fileLocation" />
          <NumberInput label="Durée en secondes" source="duration" />
          <NumberInput
            min="1"
            max="8"
            label="Identifiant de la classe"
            source="schoolClass_id"
          />
        </SimpleForm>
      </Edit>
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
    </SLessonEdit>
  );
}
