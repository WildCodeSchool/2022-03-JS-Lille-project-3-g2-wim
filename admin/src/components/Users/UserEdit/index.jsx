import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import SUserEdit from "./style";

export default function UserEdit() {
  return (
    <SUserEdit>
      <Edit>
        <SimpleForm sx={{ width: "40vw" }}>
          <TextInput source="email" />
          <TextInput label="Nom" source="name" />
          <TextInput label="Prénom" source="firstname" />
          <NumberInput min="0" source="age" />
          <TextInput label="Option" source="schoolOption" />
          <TextInput label="Nom de l'école" source="schoolName" />
          <NumberInput
            min="1"
            max="8"
            label="Identifiant de la classe"
            source="schoolClass_id"
          />
        </SimpleForm>
      </Edit>
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
    </SUserEdit>
  );
}
