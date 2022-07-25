import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export default function UserEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="email" />
        <TextInput label="Nom" source="name" />
        <TextInput label="Prénom" source="firstname" />
        <NumberInput min="0" source="age" />
        <TextInput label="Option" source="schoolOption" />
        <TextInput label="Nom de l'école" source="schoolName" />
        <NumberInput
          min="1"
          max="8"
          label="Identifiant de la classe"
          source="schoolClass_id"
        />
      </SimpleForm>
    </Edit>
  );
}
