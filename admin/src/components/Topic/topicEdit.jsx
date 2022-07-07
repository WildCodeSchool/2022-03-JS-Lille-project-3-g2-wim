import { Edit, SimpleForm, TextInput } from "react-admin";

export default function TopicEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="label" />
        <TextInput source="logo" />
        <TextInput source="icon" />
      </SimpleForm>
    </Edit>
  );
}
