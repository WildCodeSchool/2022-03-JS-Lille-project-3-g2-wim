import {
  Create,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export default function LessonCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="fileName" />
        <ReferenceInput source="schoolTopic_id" reference="lessons">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput source="musicStyle" />
        <TextInput source="fileLocation" />
        <NumberInput source="duration" />
        <ReferenceInput source="schoolClass_id" reference="users">
          <SelectInput optionText="id" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
}
