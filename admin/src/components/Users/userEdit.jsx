import {
  Edit,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export default function UserEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="email" />
        <TextInput source="name" />
        <TextInput source="firstname" />
        <NumberInput source="age" />
        <TextInput source="phoneNumber" />
        <TextInput source="schoolOption" />
        <TextInput source="schoolName" />
        <TextInput source="country" />
        <TextInput source="city" />
        <ReferenceInput source="schoolClass_id" reference="users">
          <SelectInput optionText="id" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
}
