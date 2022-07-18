import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import SLessonEdit from "./styleLesson";

export default function LessonEdit() {
  return (
    <SLessonEdit>
      <Edit>
        <SimpleForm>
          <TextInput label="Nom du fichier" source="fileName" />
          <NumberInput
            min="1"
            max="12"
            label="Identifiant de l de la Matière"
            source="schoolTopic_id"
          />
          <TextInput label="Titre" source="title" />
          <TextInput label="Genre" source="musicStyle" />
          <TextInput label="Emplacement" source="fileLocation" />
          <NumberInput label="Durée" source="duration" />
          <NumberInput
            min="1"
            max="8"
            label="Identifiant de la classe"
            source="schoolClass_id"
          />
        </SimpleForm>
        <div className="instructions">
          <p className="instruction">
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
          </p>
          <p className="instruction">
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
      </Edit>
    </SLessonEdit>
  );
}
