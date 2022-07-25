import {
  Create,
  FileField,
  FileInput,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export default function LessonCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput label="Nom du fichier" source="fileName" />
        <NumberInput
          min="1"
          max="12"
          label="Identifiant de la Matière"
          source="schoolTopic_id"
        />
        <TextInput label="Titre" source="title" />
        <TextInput label="Genre" source="musicStyle" />
        <TextInput label="Emplacement" source="fileLocation" />
        <FileInput label="Fichier audio" source="file" accept="audio/*">
          <FileField source="audioFile" title="title" />
        </FileInput>
        <NumberInput min="0" label="Durée" source="duration" />
        <NumberInput
          min="1"
          max="8"
          label="Identifiant de la classe"
          source="schoolClass_id"
        />
      </SimpleForm>
    </Create>
  );
}
