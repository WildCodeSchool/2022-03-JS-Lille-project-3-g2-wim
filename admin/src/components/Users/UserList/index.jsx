import {
  Datagrid,
  DeleteButton,
  EditButton,
  EmailField,
  List,
  NumberField,
  TextField,
} from "react-admin";
import SUserList from "./style";

export default function UserList() {
  return (
    <SUserList>
      <List>
        <article>
          <section>
            <h3>Identifiant de la classe :</h3>
            <ul>
              <span>
                <li>1 Terminale</li>
                <li>2 Première</li>
                <li>3 Seconde</li>
                <li>4 Troisième</li>
              </span>
              <span>
                <li>5 Quatrième</li>
                <li>6 Cinquième</li>
                <li>7 Sixième</li>
                <li>8 Etudes</li>
              </span>
            </ul>
          </section>
        </article>
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
      </List>
    </SUserList>
  );
}
