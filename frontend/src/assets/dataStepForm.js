export default [
  {
    name: "firstep",
    key: "1",
    label: "Identité",
    field1: {
      key: "name",
      name: "name",
      label: "Nom",
      typeOption: false,
      type: "default",
    },
    field2: {
      key: "firstname",
      name: "firstname",
      label: "Prénom",
      typeOption: false,
      type: "default",
    },
    field3: {
      key: "age",
      name: "age",
      label: "Age",
      typeOption: false,
      type: "default",
    },
  },
  {
    name: "secondstep",
    key: "2",
    label: "Informations scolaires",
    field1: {
      key: "schoolClass_id",
      name: "schoolClass_id",
      label: "Classe",
      typeOption: true,
      type: "default",
    },
    field2: {
      key: "schoolOption",
      name: "schoolOption",
      label: "Série",
      typeOption: false,
      type: "default",
    },
    field3: {
      key: "schoolName",
      name: "schoolName",
      label: "Nom de l'école",
      typeOption: false,
      type: "default",
    },
  },
  {
    name: "thirdstep",
    key: "3",
    label: "Informations de connexion",
    field1: {
      key: "email",
      name: "email",
      label: "Adresse mail",
      typeOption: false,
      type: "email",
    },
    field2: {
      key: "password",
      name: "password",
      label: "Mot de passe",
      typeOption: false,
      type: "password",
    },
    field3: {
      key: "passwordBis",
      name: "passwordBis",
      label: "Confirmer le mot de passe",
      typeOption: false,
      type: "password",
    },
  },
];