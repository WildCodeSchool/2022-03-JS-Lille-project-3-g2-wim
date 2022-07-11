import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export default function SchoolclassEdit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput label="Identifiant" min="1" source="id" />
        <TextInput label="Matière" source="label" />
      </SimpleForm>
    </Edit>
  );
}
