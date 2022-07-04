import cookies from "universal-cookie";
import { toast } from "react-toastify";
import axios from "axios";
import {
  TextField,
  Box,
  Step,
  Stepper,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import SSignUp from "./style";

const steps = [
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

export default function SignUp() {
  // Variables defined tu manage steps in material admin form
  const [activeStep, setActiveStep] = useState(0);
  // Variables to define dynamically the list of classes from database
  const [schoolClassList, setSchoolClassList] = useState([]);
  // Variables and fonction defined to control the form and sert authentification
  const [form, setForm] = useState({
    haveAccount: false,
    email: "",
    password: "",
    passwordBis: "",
    name: "",
    firstname: "",
    age: "",
    schoolOption: "",
    schoolName: "",
    schoolClass_id: "",
  });

  // Function to manage steps in accordeon
  const nextStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const prevStep = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  // Function to get values from form
  const hChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  // Function to send values in database
  const hSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:5000/auth/signup", form)
      .then(({ data }) => {
        const { token, user } = data;
        cookies.set("token", token);
        axios.defaults.headers.authorization = `Bearer ${token}`;
        toast(`You're now logged in, ${user.firstname} <3`);
      })
      .catch((e) => {
        toast.error(`Achtung!${e}`);
      });
  };
  // Using API delivering existing schoolClasses to make it connected to database
  useEffect(() => {
    axios.get("http://localhost:5000/schoolclass").then(({ data }) => {
      setSchoolClassList(data);
    });
  }, []);

  return (
    <SSignUp>
      <Box sx={{ maxWidth: "100%" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Dernière étape</Typography>
                  ) : null
                }
              >
                {/* Case step 2, field 1 : field with options to manage the schoolClasses */}
                <Typography>{step.label}</Typography>
              </StepLabel>
              <StepContent>
                {step.field1.typeOption ? (
                  <TextField
                    required
                    label={step.field1.label}
                    fullWidth
                    variant="standard"
                    type={step.type}
                    name={step.field1.name}
                    onChange={hChange}
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value>--Classe -- </option>
                    {schoolClassList.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                    {/* All other cases for step 1 */}
                  </TextField>
                ) : (
                  <TextField
                    required
                    label={step.field1.label}
                    fullWidth
                    variant="standard"
                    onChange={hChange}
                    name={step.field1.name}
                  />
                )}

                <TextField
                  required
                  label={step.field2.label}
                  fullWidth
                  variant="standard"
                  type={step.type}
                  name={step.field2.name}
                  onChange={hChange}
                />

                <TextField
                  required
                  label={step.field3.label}
                  fullWidth
                  variant="standard"
                  type={step.type}
                  name={step.field3.name}
                  onChange={hChange}
                />
                <Box sx={{ mb: 2 }}>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={nextStep}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Fin" : "Continuer"}
                  </Button>
                  <Button
                    size="large"
                    disabled={index === 0}
                    onClick={prevStep}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Retour
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 5 }}>
            <Typography>Bienvenue chez WIM !</Typography>
            <Button size="large" variant="contained" onClick={hSubmit}>
              Se connecter
            </Button>
          </Paper>
        )}
      </Box>
    </SSignUp>
  );
}
