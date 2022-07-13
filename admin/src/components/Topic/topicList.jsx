import { Datagrid, List, TextField } from "react-admin";

export default function TopicList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField label="Identifiant" source="id" />
        <TextField label="Matière" source="label" />
      </Datagrid>
    </List>
  );
}
