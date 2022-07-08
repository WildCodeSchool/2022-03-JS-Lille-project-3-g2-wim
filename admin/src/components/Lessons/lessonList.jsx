import { Datagrid, List, NumberField, TextField } from "react-admin";

export default function LessonList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="fileName" />
        <TextField source="schoolTopic_id" />
        <TextField source="title" />
        <TextField source="musicStyle" />
        <TextField source="fileLocation" />
        <NumberField source="duration" />
        <TextField source="schoolClass_id" />
      </Datagrid>
    </List>
  );
}
