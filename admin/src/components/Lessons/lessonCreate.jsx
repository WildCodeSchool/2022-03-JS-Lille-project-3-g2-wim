import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function LessonCreate() {
  const [formData, setFormData] = useState({});

  const hChange = (evt) => {
    const { name, value, type, checked, files } = evt.target;
    let newValue = null;
    switch (type) {
      case "checkbox":
        newValue = checked;
        break;
      case "file":
        [newValue] = files;
        break;
      default:
        newValue = value;
    }
    setFormData({ ...formData, [name]: newValue });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();

    const finalData = Object.keys(formData).reduce((accu, key) => {
      accu.append(key, formData[key]);
      return accu;
    }, new FormData());

    axios
      .post("http://localhost:5000/songs", finalData)
      .then(({ data }) => {
        setFormData(data.label);
        toast("Musique téléchargée");
      })
      .catch(() => {
        toast.error("Une erreure est survenue");
      });
  };

  return (
    <Create>
      <SimpleForm>
        <TextInput label="Nom du fichier" source="fileName" />
        <NumberInput
          min="1"
          max="12"
          label="Identifiant de la Matière"
          source="schoolTopic_id"
        />
        <TextInput label="Titre" source="title" />
        <TextInput label="Genre" source="musicStyle" />
        {/* <TextInput label="Emplacement" source="fileLocation" /> */}
        <form method="post" encType="multipart/form-data" onSubmit={hSubmit}>
          <input type="file" onChange={hChange} />
        </form>
        <NumberInput min="0" label="Durée" source="duration" />
        <NumberInput
          min="1"
          max="8"
          label="Identifiant de la classe"
          source="schoolClass_id"
        />
      </SimpleForm>
    </Create>
  );
}
