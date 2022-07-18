import {
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  List,
  NumberField,
  TextField,
} from "react-admin";
import SUserList from "./styleUser";

export default function UserList() {
  return (
    <SUserList>
      <List>
        <Datagrid rowClick="edit">
          <EmailField source="email" />
          <TextField label="Nom" source="name" />
          <TextField label="Prénom" source="firstname" />
          <NumberField source="age" />
          <TextField label="Option" source="schoolOption" />
          <TextField label="Nom de l'école" source="schoolName" />
          <TextField label="Identifiant de la classe" source="schoolClass_id" />
          <EditButton label="Editer" />
          <DeleteButton label="Supprimer" />
        </Datagrid>
        <div>
          <p className="instruction">
            <h3>Identifiant de la classe :</h3>
            <br />1 Terminale
            <br /> 2 Première
            <br /> 3 Seconde
            <br />4 Troisième
            <br /> 5 Quatrième
            <br /> 6 Cinquième
            <br /> 7 Sixième
            <br /> 8 Etudes
          </p>
        </div>
      </List>
    </SUserList>
  );
}
