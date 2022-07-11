import { Edit, SimpleForm, TextInput } from "react-admin";

export default function TopicEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput label="Identifiant" source="id" />
        <TextInput label="Matière" source="label" />
        <TextInput label="Logo (Page d'écoute)" source="logo" />
        <TextInput label="Icon de la matière" source="icon" />
      </SimpleForm>
    </Edit>
  );
}
