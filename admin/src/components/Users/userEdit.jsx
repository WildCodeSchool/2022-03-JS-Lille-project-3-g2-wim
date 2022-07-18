import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";
import SUserEdit from "./styleUser";

export default function UserEdit() {
  return (
    <SUserEdit>
      <Edit className="container">
        <SimpleForm>
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
        <div>
          <p className="instruction">
            <h3>Identifiant de la classe :</h3>
            <br />1 Terminale
            <br /> 2 Première
            <br /> 3 Seconde <br />4 Troisième
            <br /> 5 Quatrième
            <br /> 6 Cinquième
            <br /> 7 Sixième
            <br /> 8 Etudes
          </p>
        </div>
      </Edit>
    </SUserEdit>
  );
}
