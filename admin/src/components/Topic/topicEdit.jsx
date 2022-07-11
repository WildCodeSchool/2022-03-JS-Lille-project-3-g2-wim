import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export default function TopicEdit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput min="1" max="12" label="Identifiant" source="id" />
        <TextInput label="Matière" source="label" />
        <TextInput label="Logo (Page d'écoute)" source="logo" />
        <TextInput label="Icon de la matière" source="icon" />
      </SimpleForm>
    </Edit>
  );
}
