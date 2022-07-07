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
        <TextField source="fileName" />
        <ReferenceField source="schoolTopic_id" reference="lessons">
          <TextField source="id" />
        </ReferenceField>
        <TextField source="title" />
        <TextField source="musicStyle" />
        <TextField source="fileLocation" />
        <NumberField source="duration" />
        <ReferenceField source="schoolClass_id" reference="users">
          <TextField source="id" />
        </ReferenceField>
      </Datagrid>
    </List>
  );
}
