import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

export default function LessonList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="fileName" />
        <ReferenceField source="schoolTopic_id" reference="schoolTopics">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="title" />
        <TextField source="subTitle" />
        <TextField source="musicStyle" />
        <TextField source="fileLocation" />
        <TextField source="lyrics" />
        <TextField source="img" />
        <NumberField source="duration" />
        <ReferenceField source="schoolClass_id" reference="schoolClasses">
          <TextField source="id" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
}
