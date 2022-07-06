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
        <TextInput source="id" />
        <TextInput source="fileName" />
        <ReferenceInput source="schoolTopic_id" reference="schoolTopics">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput source="subTitle" />
        <TextInput source="musicStyle" />
        <TextInput source="fileLocation" />
        <TextInput source="lyrics" />
        <TextInput source="img" />
        <NumberInput source="duration" />
        <ReferenceInput source="schoolClass_id" reference="schoolClasses">
          <SelectInput optionText="id" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}
