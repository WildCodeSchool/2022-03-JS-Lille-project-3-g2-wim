import { Datagrid, List, TextField } from "react-admin";

export default function TopicList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="label" />
        <TextField source="logo" />
        <TextField source="icon" />
      </Datagrid>
    </List>
  );
}
