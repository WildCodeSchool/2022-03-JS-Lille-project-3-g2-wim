import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

export default function LessonEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="fileName" />
        <NumberInput source="schoolTopic_id" />
        <TextInput source="title" />
        <TextInput source="musicStyle" />
        <TextInput source="fileLocation" />
        <NumberInput source="duration" />
        <NumberInput source="schoolClass_id" />
      </SimpleForm>
    </Edit>
  );
}
