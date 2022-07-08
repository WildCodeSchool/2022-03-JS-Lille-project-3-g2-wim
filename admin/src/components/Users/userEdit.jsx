import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export default function UserEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="email" />
        <TextInput source="name" />
        <TextInput source="firstname" />
        <NumberInput source="age" />
        <TextInput source="schoolOption" />
        <TextInput source="schoolName" />
        <TextInput source="schoolClass_id" />
      </SimpleForm>
    </Edit>
  );
}
