import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export default function LessonCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="fileName" />
        <TextInput source="schoolTopic_id" />
        <TextInput source="title" />
        <TextInput source="musicStyle" />
        <TextInput source="fileLocation" />
        <NumberInput source="duration" />
        <TextInput source="schoolClass_id" />
      </SimpleForm>
    </Create>
  );
}
