import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export default function LessonEdit() {
  return (
    <Edit>
      <SimpleForm>
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
    </Edit>
  );
}
